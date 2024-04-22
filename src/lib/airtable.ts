import Airtable from 'airtable';

export const base = Airtable.base(process.env.AIRTABLE_BASE_EVENTS || '');

export async function getUpcomingEvents(communities?: Community[]) {
  // If communities aren't passed in, we'll eventually
  // go fetch them from Airtable. If one community has multiple
  // events, we don't want to go fetch the same community multiple times.
  // This will be the cache of fetched communities.
  let fetchedCommunities: { [community_id: string]: Community } = {};

  const events: CommunityEvent[] = (
    await base('Events V2')
      .select({
        filterByFormula: '{Time Start} >= TODAY()',
        sort: [
          {
            field: 'Time Start',
            direction: 'asc',
          },
        ],
      })
      .all()
  ).map(async (record) => {
    const community_ids = record.get('Community') as string[];

    // If we've already got all of the communities loaded on the page,
    // we can pass those in instead of
    // making another request to Airtable to fetch each one.
    let community: Community = fetchedCommunities[community_ids[0]];
    if (communities) {
      community = communities.find(
        (c) => c.id === community_ids[0]
      ) as Community;
    } else if (!community) {
      const communityRecord = await base('Communities').find(community_ids[0]);
      community = recordToCommunity(communityRecord);
    }

    const event = recordToEvent(record);
    event.community = community;

    return event;
  }) as any[]; // same, AirTable types are actively bad.

  const resolvedEvents = await Promise.all(events);
  return resolvedEvents;
}

export function recordToEvent(
  record: Airtable.Record<Airtable.FieldSet>
): CommunityEvent {
  const community_ids = record.get('Community') as string[];

  const event = {
    id: record.id,
    time_start: record.get('Time Start'),
    time_end: record.get('Time End'),
    community_id: community_ids[0],
    location_id: record.get('Location'),
    type: record.get('Type'),
    url: record.get('Event URL'),
  };

  return event as CommunityEvent;
}

export function recordToCommunity(
  record: Airtable.Record<Airtable.FieldSet>
): Community {
  const community = {
    id: record.id,
    name: (record.get('Community Name') as string).trim(),
    url: record.get('URL'),
    meetup_url: record.get('Meetup URL'),
    logo: record.get('Logo'),
    country: record.get('Country'),
  };

  return community as Community;
}

export function oneEventPerCommunity(
  events: CommunityEvent[]
): CommunityEvent[] {
  const seenCommunity = new Set<string>();

  return events.filter((event) => {
    if (seenCommunity.has(event.community_id)) {
      return false;
    } else {
      seenCommunity.add(event.community_id);
      return true;
    }
  });
}
