import Link from 'next/link';

export default function Community({ community }: { community: Community }) {
  return (
    <Link
      href={community.url}
      key={community.id}
      className="flex flex-col border border-black hover:bg-slate-50 hover:outline hover:outline-1 hover:outline-black"
    >
      <div className="p-2 border-b border-black">
        <div
          className="w-full h-36 bg-contain bg-no-repeat bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url(${community.logo?.[0].url})`,
          }}
        >
          {!community.logo && (
            <h2 className="text-7xl font-bold text-center inline-block">
              {community.name
                .split(' ')
                .map((word) => word.charAt(0))
                .join('')}
            </h2>
          )}
        </div>
      </div>
      <div className="p-2">
        <h5 className="text-l font-semibold">{community.name}</h5>
        <span className="inline-flex items-center gap-1">
          {community.country}
        </span>
      </div>
    </Link>
  );
}
