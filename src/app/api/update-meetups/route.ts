import * as cheerio from 'cheerio';
import { NextResponse } from 'next/server';
import path from 'node:path';

import { base, recordToCommunity } from '@/lib/airtable';

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

export async function POST() {
  const communityRecords = await getCommunities();
  const eventRecords = await getEvents();

  const communities = communityRecords.map(async (record) => {
    const community = recordToCommunity(record);

    const meetupEventsUrl = createUrl(community.meetup_url, 'events');
    log(`Fetching meetup url ${meetupEventsUrl.toString()}`, community);

    const response = await fetch(meetupEventsUrl);

    const $ = cheerio.load(await response.text());
    const events = $('.eventList-list > li');

    log(`Found ${events.length} events`, community);
    return events
      .map(async (i, $el) => {
        const startTimeStr = $($el)
          .find('.eventTimeDisplay time')
          .attr('datetime');

        const startTime = new Date(parseInt(startTimeStr as string));

        log(`Upcoming event found`, community, startTime.toISOString());

        const relativeLink = $($el).find('.eventCard--link').attr('href');
        const eventUrl = createUrl('https://meetup.com', relativeLink || '');

        const existingEvent = eventRecords.find(
          (r) => r.get('Event URL') === eventUrl.toString()
        );

        if (existingEvent) {
          log(
            `Event already exists (${existingEvent.id}), skipping`,
            community,
            startTime.toISOString()
          );
        } else {
          log(
            'Event does not exist, creating',
            community,
            startTime.toISOString()
          );

          const newEvent = await base('Events').create({
            'Time Start': startTime.toISOString(),
            Community: [community.id],
            Type: 'Meetup',
            'Event URL': eventUrl.toString(),
          });
          log(
            `Event created ${newEvent.id}`,
            community,
            startTime.toISOString()
          );
        }
      })
      .toArray();
  });

  const communityPromises = await Promise.all(communities);

  // communityPromises should at this point be an array of communities, which contain an array of
  // events. Flatten it out so we can await all of the events and make sure Airtable gets updated.
  const events = await Promise.all(communityPromises.flat());

  console.log(`\n\nAll done! Dealt with ${events.length} events.`);

  return NextResponse.json({ hello: 'world' });
}
