import { Song } from "../lib/spotify.d";
import { searchTracks } from "../lib/spotify";

export type SearchResult = Pick<Song, "id" | "name"> & {artists: string};

export default async (req: any, res: any) => {
  const { query } = req.query;
  let { tracks } = (await searchTracks(query)) as { tracks: { items: Song[] } };
  let { items } = tracks;
  const smushed_items = items.map(i => ({
    id: i.id,
    name: i.name,
    artists: i.artists.map(a => a.name).join(', ')
  }))
  res.send(smushed_items);
};
