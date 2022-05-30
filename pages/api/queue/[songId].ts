import { addToQueue, connect, getQueue } from "../lib/database";

export type QueueEntry = { id: string; song_id: string };

export default async (req: any, res: any) => {
  const { songId } = req.query;

  if (!songId) {
    return res.status(400).json({ queue: [] });
  }

  await addToQueue(songId);

  return res.status(200).json();
};
