import { Song } from "./lib/spotify.d";
import { getTopTracks } from "./lib/spotify";

export default async (_: any, res: any) => {
  const response = await getTopTracks();
  const { items } = response as { items: Song[] };

  const tracks = items.slice(0, 10).map((_song) => ({
    artists: _song.artists.map((_artist) => _artist.name).join(", "),
    href: _song.external_urls.spotify,
    name: _song.name,
  }));

  return res.status(200).json({ tracks });
};
