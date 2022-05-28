export interface Song extends BasicInfo {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: { isrc: string };
  external_urls: ExternalUrls;
  is_local: boolean;
  popularity: number;
  preview_url: string;
  track_number: number;
}

export interface Album extends BasicInfo {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls;
  images: any[];
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
}

export interface Artist extends BasicInfo {}

export type BasicInfo = {
  id: string;
  name: string;
  type: string;
  uri: string;
  href: string;
  external_urls: ExternalUrls;
};

export type ExternalUrls = {
  spotify: string;
};
