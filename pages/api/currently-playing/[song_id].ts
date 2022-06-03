import { updateListeningTo } from "../lib/database";

export default async (req: any, res: any) => {
  const { song_id } = req.query;
  await updateListeningTo(song_id);
  return res.status(200).json({});
};
