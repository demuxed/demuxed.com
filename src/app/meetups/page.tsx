import { format } from 'date-fns';
import {
  CalendarDaysIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/20/solid';
import Link from 'next/link';

import CommunityItem from '@/components/CommunityItem';
import CommunityEventItem from '@/components/CommunityEventItem';
import {
  base,
  getUpcomingEvents,
  oneEventPerCommunity,
  recordToCommunity,
} from '@/lib/airtable';

export const revalidate = 60 * 60; // 1 hour

async function getData() {
  const communities: Community[] = (
    await base('Communities')
      .select({
        sort: [
          {
            field: 'Community Name',
            direction: 'asc',
          },
        ],
      })
      .all()
  ).map((record) => recordToCommunity(record)) as Community[]; // Yes, I'm ignoring Airtable types here because ugh, Airtable types suck.

  const events = await getUpcomingEvents(communities);
  const filteredEvents = oneEventPerCommunity(events);

  return { communities, events: filteredEvents };
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);

  return format(date, 'MMM d');
}

export default async function Page() {
  const { communities, events } = await getData();

  return (
    <main className="container max-w-screen-lg mx-auto pt-4 pb-16">
      <h1 className="text-6xl font-bold mb-8">Meetups & Events</h1>

      <p className="py-4 max-w-screen-md">
        These communities are all run by amazing, independent organizers from
        all across the video industry and globe. If you're interested in getting
        involved with any of them, help make introductions!
      </p>
      <p className="py-4 max-w-screen-md">
        If you're interested in starting a new community,{' '}
        <Link
          className="underline hover:text-gray-600"
          href="mailto:info@demuxed.com?subject=I want to start a meetup"
        >
          shoot us a note
        </Link>
        . We can usually help with your first event's round of pizza and drinks,
        and in some cases we've even been able to help coordinate getting
        speakers involved.
      </p>
      <p className="py-4 max-w-screen-md">
        These upcoming events are pulled directly from each group's Meetup page
        on a consistent basis and is updated every few hours. If you notice
        something wrong, out of date, etc, please let us know!
      </p>

      <h2 className="text-3xl font-semibold py-8">Upcoming Events</h2>
      <div className="grid grid-cols-1 auto-rows-fr sm:grid-cols-2 md:grid-cols-3 gap-2">
        {events.map((event) => (
          <CommunityEventItem key={event.id} event={event} />
        ))}
      </div>

      <h2 className="text-3xl font-semibold pt-16 pb-8">Communities</h2>
      <div className="grid grid-cols-1 auto-rows-fr sm:grid-cols-2 md:grid-cols-3 gap-2">
        {communities.map((community) => (
          <CommunityItem key={community.id} community={community} />
        ))}
      </div>
    </main>
  );
}
