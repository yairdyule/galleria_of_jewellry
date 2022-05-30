import { getQueue } from "../lib/database";
import { getTracksByIds } from "../lib/spotify";

export type QueueEntry = { id: string; song_id: string };

export default async (req: any, res: any) => {
  console.log('\n\nqueue requested - /api/queue/')
  const data = await getQueue();
  console.log('queue found - /api/queue/')
  console.log('\n\nfinding tracks - /api/queue/')
  const { tracks } = await getTracksByIds(data.map((q) => q.song_id));
  console.log('\n\nfound tracks - /api/queue/')
  console.log(tracks)

  if (!tracks) {
    return res.status(200).json({ queue: [] });
  }

  return res.status(200).json(tracks);
};
