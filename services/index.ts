import { Song } from "../pages/api/lib/spotify.d";

import { ICurrentlyPlaying, ITopTracks } from "../pages/jams";

export const BASE_API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://jaredjewell.dev";

export const fetchTopTracks = async () => {
  const { tracks } = await fetch(`${BASE_API_URL}/api/top-tracks`).then((d) =>
    d.json()
  );
  return tracks as ITopTracks[];
};

export const fetchCurrentlyPlaying = async () => {
  const currently_playing = (await fetch(
    `${BASE_API_URL}/api/currently-playing`
  ).then((d) => d.json())) as ICurrentlyPlaying;
  return currently_playing;
};

export const fetchQueue = async () => {
  const queue = (await fetch(`${BASE_API_URL}/api/queue`).then((d) =>
    d.json()
  )) as Song[];
  return queue;
};

export const addToQueue = async (song_id: string) => {
  await fetch(`${BASE_API_URL}/api/queue/${song_id}`);
};

export type SearchResult = Pick<Song, "id" | "name"> & { artists: string };
export const searchSong = async (query: string) => {
  const response = (await fetch(
    `${BASE_API_URL}/api/search-tracks/${query}`
  ).then((d) => d.json())) as SearchResult[];
  return response;
};
