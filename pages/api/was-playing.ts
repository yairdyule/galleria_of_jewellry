import { getWasPlaying } from "./lib/database";
import { Song } from "./lib/spotify.d";
import { getTrackById } from "./lib/spotify";

export default async (_: any, res: any) => {
  const song_id = await getWasPlaying();

  if (!song_id) {
    return res.status(500);
  }
  const {artists: _artists, external_urls, name, id} = await getTrackById(song_id) as Song;
  const href = external_urls.spotify
  const artists = _artists.map(a => a.name).join(", ")

  return res.status(200).json({name, artists, href, is_playing: false})
};
