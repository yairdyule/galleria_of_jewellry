import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

export const connect = async () => {
  await db.$connect();
  return db;
};

export const disconnect = async () => {
  await db.$disconnect();
};

export const getLastListenedTo = async () => {
  const data = await db.last_listening_to.findMany({ where: {} });
  return data[0];
};

export const updateListeningTo = async (song_id: string) => {
  const last_id = await getLastListenedTo();
  await db.last_listening_to.update({
    where: {
      id: last_id.id,
    },
    data: {
      song_id,
    },
  });
};

export const getQueue = async () => {
  const q = await db.queue.findMany();
  return q;
};

export const addToQueue = async (song_id: string) => {
  const exists = await db.queue.findFirst({ where: { song_id } });
  if (!exists) {
    await db.queue.create({ data: { song_id } });
  }
};
