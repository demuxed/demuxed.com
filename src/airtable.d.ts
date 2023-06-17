interface AirtableImageThumbnail {
  url: string;
  width: number;
  height: number;
}

interface AirtableImage {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  size: number;
  type: string;
  thumbnails: {
    small: AirtableImageThumbnail;
    large: AirtableImageThumbnail;
    full: AirtableImageThumbnail;
  };
}

interface Community {
  id: string;
  name: string;
  url: string;
  meetup_url: string;
  country: string;
  upcoming_event?: CommunityEvent;
  logo?: AirtableImage[];
}

interface Location {
  id: string;
  name: string;
  address: string;
}

interface CommunityEvent {
  id: string;
  time_start: string;
  time_end: string;
  community_id: string;
  community?: Community;
  location_id: string;
  location?: Location[];
  type: string;
  url: string;
}
