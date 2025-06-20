import Link from '@/components/Link';
import { FiTwitter, FiGithub, FiYoutube } from 'react-icons/fi';

import DemuxedLogo from '@/components/DemuxedLogo';

const years = [
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021',
  '2022',
  '2023',
  '2024',
  '2025',
];

export default function Footer() {
  return (
    <footer>
      <div className="bg-slate-50 border-t-2 border-black">
        <div className="container max-w-screen-lg mx-auto py-12 px-4 md:px-0">
          <DemuxedLogo className="w-40" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            <div className="col-span-2 md:col-span-3">
              <h4 className="text-sm font-semibold text-gray-700 pt-4 pb-1">
                Past Demuxeds
              </h4>
              <ul className="text-sm">
                {years.map((year) => (
                  <li className="inline-block pr-2 hover:underline" key={year}>
                    <Link href={`https://${year}.demuxed.com`}>{year}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-700 pt-4 pb-1">
                Community
              </h4>
              <ul className="text-sm">
                <li className="pb-1">
                  <Link href="/meetups">Events & Meetups</Link>
                </li>
                <li className="pb-1">
                  <Link href="/about">About</Link>
                </li>
                <li className="pb-1">
                  <Link href="/posts">Posts</Link>
                </li>
                <li className="pb-1">
                  <Link href="https://video-dev.org">Video Dev</Link>
                </li>
                <li className="pb-1">
                  <Link href="mailto:info@demuxed.com">Contact us</Link>
                </li>
              </ul>
            </div>
            <div className="text-right">
              <h4 className="text-sm font-semibold text-gray-700 pt-4 pb-1">
                Get social
              </h4>
              <ul className="text-sm">
                <li className="pb-1">
                  <Link href="https://twitter.com/demuxed">
                    @demuxed <FiTwitter className="inline-block" />
                  </Link>
                </li>
                <li className="pb-1">
                  <Link href="https://youtube.com/demuxed">
                    YouTube <FiYoutube className="inline-block" />
                  </Link>
                </li>
                <li className="pb-1">
                  <Link href="https://github.com/demuxed">
                    Github <FiGithub className="inline-block" />
                  </Link>
                </li>
              </ul>

              <h4 className="text-sm font-semibold text-gray-700 pt-4 pb-1">
                Legal stuff
              </h4>
              <ul className="text-sm">
                <li className="pb-1">
                  <Link href="/code-of-conduct">Code of Conduct</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
