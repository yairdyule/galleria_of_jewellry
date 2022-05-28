import { getCurrentlyPlaying } from "./lib/spotify";
import { Song } from "./lib/spotify.d";

export default async (_: any, res: any) => {
  const data = await getCurrentlyPlaying();

  if (!data) {
    return res.status(200).json({is_playing: false});
  }

  const { item: song, is_playing } = data as {
    item: Song;
    is_playing: Boolean;
  };
  const { artists: _artists, external_urls, name } = song;

  const href = external_urls.spotify;
  const artists = _artists.map((a) => a.name).join(', ');

  return res.status(200).json({ name, artists, href, is_playing });
};
