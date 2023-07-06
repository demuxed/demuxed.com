import Link from 'next/link';

import Button from '@/components/Button';
import NewsletterSubscribe from '@/components/NewsletterSubscribe';

export default function GetInvolved() {
  return (
    <div className="flex flex-col justify-center mt-16">
      <h2 className="text-3xl font-semibold pb-4">Get involved</h2>

      <div className="grid grid-flow-row-dense grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
        <div className="border border-black p-4 row-span-2 flex flex-col justify-between">
          <h3 className="text-2xl font-semibold pb-2">Newsletter</h3>
          <p className="pb-4">
            We send ~1 email a month about the video industry along with updates
            on Demuxed, community events. No spam, ever.
          </p>
          <NewsletterSubscribe />
        </div>
        <div className="border border-black p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold pb-2">Slack</h3>
            <p className="pb-4">
              Join the video dev community on Slack. You can find Demuxed stuff
              mostly in{' '}
              <span className="font-semibold font-mono">#demuxed</span>.
            </p>
          </div>
          <Link href="https://video-dev.org">
            <Button className="w-full">Join Slack</Button>
          </Link>
        </div>
        <div className="border border-black p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold pb-2">Podcast</h3>
            <p className="pb-4">
              We'll be honest, we don't publish as often as we'd like, but when
              we do we bring the heat.
            </p>
          </div>
          <Link href="https://www.heavybit.com/library/podcasts/demuxed/">
            <Button className="w-full">Listen</Button>
          </Link>
        </div>
        <div className="border border-black p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold pb-2">Videos</h3>
            <p className="pb-4">
              With very few exceptions, all of our talks are recorded and
              published on our YouTube channel.
            </p>
          </div>
          <Link href="https://youtube.com/demuxed">
            <Button className="w-full">Watch</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
