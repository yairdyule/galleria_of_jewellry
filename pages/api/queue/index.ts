import { getQueue } from "../lib/database";
import { getTracksByIds } from "../lib/spotify";

export type QueueEntry = { id: string; song_id: string };

export default async (req: any, res: any) => {
  const data = await getQueue();
  const { tracks } = await getTracksByIds(data.map((q) => q.song_id));

  if (!tracks) {
    return res.status(200).json({ queue: [] });
  }

  return res.status(200).json(tracks);
};
