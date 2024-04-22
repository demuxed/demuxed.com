import { NextResponse } from 'next/server';
import path from 'node:path';

import { base, recordToCommunity } from '@/lib/airtable';
import { EventsSchema } from './schema';

function log(message: string, community: Community, eventTime?: string) {
  let str = `[${community.name}]`;

  if (eventTime) {
    str += `[${eventTime}]`;
  }

  str += ` ${message}`;

  console.info(str);
}

async function getCommunities() {
  const records = await base('Communities')
    .select({
      sort: [
        {
          field: 'Community Name',
          direction: 'asc',
        },
      ],
    })
    .all();

  return records;
}

async function getEvents() {
  const records = await base('Events')
    .select({
      filterByFormula: '{Time Start} >= TODAY()',
    })
    .all();

  return records;
}

function createUrl(url: string, ...paths: string[]) {
  const urlObj = new URL(url);

  urlObj.pathname = path.join(urlObj.pathname, ...paths);

  return urlObj;
}

export async function GET() {
  const communityRecords = await getCommunities();
  const eventRecords = await getEvents();

  const communities = communityRecords
    .map(async (record) => {
      const community = recordToCommunity(record);

      if (!community.meetup_url) {
        return log(`No meetup URL, skipping`, community);
      }

      const meetupEventsUrl = createUrl(
        community.meetup_url.replace('www.', 'api.'),
        'events'
      );
      log(`Fetching meetup url ${meetupEventsUrl.toString()}`, community);

      const response = await fetch(meetupEventsUrl, { cache: 'no-store' });

      if (!response.ok) {
        log(`Failed to fetch events`, community, response.statusText);
        return undefined;
      }
      const json = await response.json();

      const events = EventsSchema.parse(json);

      log(`Found ${events.length} events`, community);
      return events.map(async (event) => {
        const startTime = event.time ? new Date(event.time) : undefined;
        const startTimeISOString = startTime?.toISOString();

        log(`Upcoming event found`, community, startTimeISOString);

        const eventUrl = event.link;

        const existingEvent = eventUrl
          ? eventRecords.find((r) => r.get('Event URL') === eventUrl.toString())
          : undefined;

        if (existingEvent) {
          log(
            `Event already exists (${existingEvent.id}), skipping`,
            community,
            startTimeISOString
          );

          return undefined;
        } else {
          log('Event does not exist, creating', community, startTimeISOString);

          const newEvent = await base('Events').create({
            'Time Start': startTimeISOString,
            Community: [community.id],
            Type: 'Meetup',
            'Event URL': eventUrl,
          });

          log(`Event created ${newEvent.id}`, community, startTimeISOString);

          return newEvent;
        }
      });
    })
    .filter((c) => c !== undefined);

  const communityPromises = await Promise.all(communities);

  // communityPromises should at this point be an array of communities, which contain an array of
  // events. Flatten it out so we can await all of the events and make sure Airtable gets updated.
  const events = await Promise.all(communityPromises.flat());

  console.log(`\n\nAll done! Dealt with ${events.length} events.`);

  return NextResponse.json({
    communities_processed: communityRecords.length,
    events_processed: eventRecords.length,
    new_events: events
      .filter((e) => e !== undefined)
      .map((e) => ({
        // Super weak that TS doesn't know that e is not undefined here after the `filter` above.
        id: e?.id,
        community: e?.get('Community'),
        type: e?.get('Type'),
        url: e?.get('Event URL'),
        time: e?.get('Time Start'),
      })),
  });
}
