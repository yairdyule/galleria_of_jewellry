import React from "react";
import ListeningTo from "../components/listeningTo";
import Queue from "../components/queue";
import TopTracks from "../components/topTracks";
import { Song } from "./api/lib/spotify.d";

export type ITopTracks = Pick<Song, "name" | "href"> & { artists: string[] };
export type ICurrentlyPlaying = ITopTracks & { is_playing: boolean };

export default function Jams() {
  return (
    <div className="flex flex-col items-start justify-center w-full">
      <h1 className="text-3xl">Jared&apos;s Jams</h1>
      <ListeningTo />
      <TopTracks />
      <Queue />
    </div>
  );
}
