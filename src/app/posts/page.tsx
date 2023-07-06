import Link from '@/components/Link';
import { readdir } from 'node:fs/promises';
import { compareDesc, format } from 'date-fns';
import { InformationCircleIcon } from '@heroicons/react/20/solid';

function formatDate(dateObj: Date) {
  return format(dateObj, 'MMM d, yyyy');
}

async function getPosts() {
  const files = await readdir('posts');

  const posts = await Promise.all(
    files.map(async (file) => {
      const { meta } = await import(`posts/${file}`);

      return {
        ...meta,
        dateObj: new Date(meta.date),
        slug: file.replace('.mdx', ''),
      };
    })
  );

  return posts.sort((a, b) => compareDesc(a.dateObj, b.dateObj));
}

export default async function Posts() {
  const posts = await getPosts();

  return (
    <main className="container max-w-screen-lg mx-auto pt-4 pb-16">
      <h1 className="text-6xl font-bold mb-8">Newsletters and posts</h1>

      <ul className="divide-y divide-gray-100">
        {posts.map((post) => (
          <li key={post.slug} className="py-5">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              <Link href={`/posts/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </p>
            <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
              <p>
                <time dateTime={post.date}>{formatDate(post.dateObj)}</time>
              </p>
              <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <p>{post.authors.join(', ')}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="relative bg-layer-2 p-4 pr-16 border border-gray-200">
        <div className="flex items-start space-x-2.5 text-gray-900">
          <InformationCircleIcon className="h-6 w-6 flex-shrink-0" />
          <div>
            <div className="mt-0.5 text-sm font-semibold">
              Wait this is all y'all have written?
            </div>
            <div className="mt-1 text-xs">
              No! We've written a lot more over the years, particularly in the
              form of newsletters, but we're still migrating content (and might
              not migrate <span className="italic">everything</span>). If
              there's something in particular you feel is missing, ping us in
              #demuxed on <Link href="https://video-dev.org">Video Dev</Link>.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
