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
    <main className="container mx-auto max-w-screen-lg pb-8 pt-4">
      <div className="mt-8 flex max-w-screen-md flex-col items-center justify-center">
        <h1 className="text-4xl font-bold md:text-6xl">
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

      <div className="mt-8 flex flex-col justify-center">
        <h2 className="pb-4 text-3xl font-semibold">
          Upcoming community stuff
        </h2>
        <div className="grid grid-flow-row-dense auto-rows-fr grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          <div className="row-span-2 flex flex-col place-content-center gap-8 border border-black bg-black p-4 text-white sm:col-span-2 sm:flex-row">
            <img src="/london.png" className="w-1/3 rounded border border-white" />
            <div className="flex flex-col justify-center">
              <Link href="https://2025.demuxed.com">
                <h3 className="pb-2 text-2xl font-semibold">Demuxed 2025</h3>
              </Link>
              <p className="pb-2">
                October 29-30
                <br />
                London, UK.
              </p>
              <div className="flex flex-row gap-2 max-[250px]:flex-col">
                <Link href="https://2025.demuxed.com" className="flex-1 sm:flex-none">
                  <Button
                    className="w-full bg-slate-300"
                    variant="inverse"
                  >
                    Learn more
                  </Button>
                </Link>
                <Link
                  href="https://2025.demuxed.com/submit"
                  className="flex-1 sm:flex-none"
                >
                  <Button className="w-full" variant="inverse">
                    Submit a talk
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
