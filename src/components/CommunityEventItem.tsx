import Link from 'next/link';
import Badge from '@/components/Badge';
import { CalendarDaysIcon } from '@heroicons/react/20/solid';
import { format } from 'date-fns';

export default function CommunityEventItem({
  event,
  className = '',
}: {
  event: CommunityEvent;
  className?: string;
}) {
  return (
    <Link
      href={event.url}
      key={event.id}
      className={`flex gap-1 justify-between border border-black p-3 relative hover:bg-slate-50 hover:outline hover:outline-1 hover:outline-black ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-center">
        <Badge color="green">{event.type}</Badge>
        <h5 className="text-l font-semibold pt-1">{event.community?.name}</h5>
        <span className="inline-flex items-center gap-1">
          <CalendarDaysIcon className="h-4 w-4" aria-hidden="true" />{' '}
          {format(new Date(event.time_start), 'MMM d')}
        </span>
      </div>
      {event.community?.logo?.[0].url && (
        <div
          className="bg-contain bg-no-repeat bg-center h-full w-1/4"
          style={{
            backgroundImage: `url(${event.community?.logo?.[0].url})`,
          }}
        />
      )}
      {!event.community?.logo?.[0].url && event.community && (
        <div className="h-full w-1/4 flex items-center">
          <h2 className="text-2xl font-bold text-center w-full">
            {event.community.name
              .split(' ')
              .map((word) => word.charAt(0))
              .join('')}
          </h2>
        </div>
      )}
    </Link>
  );
}
