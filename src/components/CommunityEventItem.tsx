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
      className={`border border-black p-2 relative hover:bg-slate-50 hover:outline hover:outline-1 hover:outline-black h-24 ${className}`}
    >
      <h5 className="text-l font-semibold">{event.community?.name}</h5>
      <Badge color="green" className="absolute bottom-0 right-0">
        {event.type}
      </Badge>
      <span className="inline-flex items-center gap-1">
        <CalendarDaysIcon className="h-4 w-4" aria-hidden="true" />{' '}
        {format(new Date(event.time_start), 'MMM d')}
      </span>
      <div
        className="absolute top-0 left-0 right-0 bottom-0 opacity-10 -z-0 bg-contain bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${event.community?.logo?.[0].url})`,
        }}
      />
    </Link>
  );
}
