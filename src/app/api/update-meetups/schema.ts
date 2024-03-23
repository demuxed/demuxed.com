import { z } from 'zod';

// marked everything as optional since I couldn't actually find any docs on this

const VenueSchema = z.object({
  id: z.number().optional(),
  name: z.string().optional(),
  lat: z.number().optional(),
  lon: z.number().optional(),
  repinned: z.boolean().optional(),
  address_1: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  localized_country_name: z.string().optional(),
  zip: z.string().optional(),
  state: z.string().optional(),
});

const GroupSchema = z.object({
  created: z.number().optional(),
  name: z.string().optional(),
  id: z.number().optional(),
  join_mode: z.string().optional(),
  lat: z.number().optional(),
  lon: z.number().optional(),
  urlname: z.string().optional(),
  who: z.string().optional(),
  localized_location: z.string().optional(),
  state: z.string().optional(),
  country: z.string().optional(),
  region: z.string().optional(),
  timezone: z.string().optional(),
});

const EventSchema = z.object({
  created: z.number().optional(),
  duration: z.number().optional(),
  id: z.string(),
  name: z.string().optional(),
  date_in_series_pattern: z.boolean().optional(),
  status: z.string().optional(),
  time: z.number().optional(),
  local_date: z.string().optional(),
  local_time: z.string().optional(),
  rsvp_close_offset: z.string().optional(),
  updated: z.number().optional(),
  utc_offset: z.number().optional(),
  waitlist_count: z.number().optional(),
  yes_rsvp_count: z.number().optional(),
  venue: VenueSchema.optional(),
  is_online_event: z.boolean().optional(),
  eventType: z.string().optional(),
  group: GroupSchema.optional(),
  link: z.string().optional(),
  description: z.string().optional(),
  how_to_find_us: z.string().optional(),
  visibility: z.string().optional(),
  member_pay_fee: z.boolean().optional(),
});

export const EventsSchema = z.array(EventSchema);
