'use client';

import { format } from 'date-fns';

export default function LocalDate({ date }: { date: string }) {
  return <time dateTime={date}>{format(new Date(date), 'MMM d')}</time>;
}
