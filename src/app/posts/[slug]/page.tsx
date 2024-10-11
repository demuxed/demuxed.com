import Link from 'next/link';
import Head from 'next/head';
import {
  CalendarIcon,
  ChevronLeftIcon,
  PencilSquareIcon,
} from '@heroicons/react/20/solid';

import NewsletterSubscribe from '@/components/NewsletterSubscribe';

const getPost = async (slug: string) => {
  const { default: post, meta } = await import(`posts/${slug}.mdx`);

  return { post, meta };
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { meta } = await getPost(params.slug);

  return {
    title: meta.title,
    description: meta.description,
    authors: meta.authors.map((author: string) => ({ name: author })),
    publishedTime: new Date(meta.date).toISOString(),
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { post: Content, meta } = await getPost(params.slug);

  return (
    <main className="container max-w-screen-md mx-auto pt-4 pb-16 prose">
      <Link
        href="/posts"
        className="inline-flex items-center gap-x-1 text-xs font-medium text-gray-900"
      >
        <ChevronLeftIcon className="w-4 h-4" /> All posts
      </Link>
      <h1 className="mt-4">{meta.title}</h1>
      <div className="flex gap-2">
        <span className="inline-flex items-center gap-x-1.5 px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
          <CalendarIcon className="h-3 w-3" aria-hidden="true" />
          {meta.date}
        </span>

        <span className="inline-flex items-center gap-x-1.5 px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
          <PencilSquareIcon className="h-3 w-3" aria-hidden="true" />
          {meta.authors.join(', ')}
        </span>
      </div>

      <Content />

      <div className="border border-black p-4 flex flex-col justify-between mt-16 max-w-screen-sm mx-auto">
        <h3 className="mt-1">Get this in your inbox</h3>
        <p>
          We send ~1 email a month about the video industry along with updates
          on Demuxed and other community events. No spam, ever.
        </p>
        <NewsletterSubscribe />
      </div>

      {meta.sponsorImage && (
        <img
          className="max-w-xl w-full mx-auto"
          src={meta.sponsorImage}
          alt="The collection of logos showing this year's sponsors"
        />
      )}
    </main>
  );
}
