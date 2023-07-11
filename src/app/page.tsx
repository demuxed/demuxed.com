import Link from 'next/link';

import HomeCTA from '@/components/TV';
import Button from '@/components/Button';
import GetInvolved from '@/components/GetInvolved';
import CommunityEventItem from '@/components/CommunityEventItem';

import { base, getUpcomingEvents, oneEventPerCommunity } from '@/lib/airtable';

export const revalidate = 60 * 60; // 1 hour

export default async function Home() {
  const events = await getUpcomingEvents();

  return (
    <main className="container max-w-screen-lg mx-auto pt-4 pb-8">
      <div className="flex flex-col items-center justify-center mt-8 max-w-screen-md">
        <h1 className="text-4xl md:text-6xl font-bold">
          The conference &amp; community for video devs
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Demuxed has been getting video devs together since 2015 and inspired
          other technical video conferences and{' '}
          <Link className="underline" href="/meetups">
            meetups
          </Link>{' '}
          around the world along the way.
        </p>
      </div>

      <div className="flex flex-col justify-center mt-8">
        <h2 className="text-3xl font-semibold pb-4">
          Upcoming community stuff
        </h2>
        <div className="grid auto-rows-fr grid-flow-row-dense grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          <div className="border border-black bg-black text-white flex flex-col sm:flex-row p-4 gap-8 row-span-2 sm:col-span-2 place-content-center">
            <HomeCTA className="w-1/3" />
            <div className="flex flex-col justify-center">
              <Link href="https://2023.demuxed.com">
                <h3 className="text-2xl font-semibold pb-2">Demuxed 2023</h3>
              </Link>
              <p className="pb-2">
                October 24-25
                <br />
                San Francisco, CA
              </p>
              <div className="flex flex-row max-[250px]:flex-col gap-2">
                <Link
                  href="https://tickets.demuxed.com"
                  className="flex-1 sm:flex-none"
                >
                  <Button className="w-full" variant="inverse">
                    Buy a ticket
                  </Button>
                </Link>
                <Link
                  href="mailto:sponsor@demuxed.com"
                  className="flex-1 sm:flex-none"
                >
                  <Button className="w-full" variant="inverse">
                    Sponsor
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          {oneEventPerCommunity(events).map((event, index) => (
            <CommunityEventItem
              key={event.id}
              event={event}
              className={index === 0 ? '-order-1' : ''}
            />
          ))}
        </div>
      </div>

      <GetInvolved />
    </main>
  );
}
