import { getWasPlaying } from "./lib/database";
import { getTrackById } from "./lib/spotify";

export default async (_: any, res: any) => {
  const song_id = await getWasPlaying();
  if (!song_id) {
    return res.status(500);
  }
  const track = getTrackById(song_id);
};
