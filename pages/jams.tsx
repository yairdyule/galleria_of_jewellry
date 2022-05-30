import React, { useEffect } from "react";
import ListeningTo from "../components/listeningTo";
import Queue from "../components/queue";
import TopTracks from "../components/topTracks";
import { Song } from "./api/lib/spotify.d";
import { fetchCurrentlyPlaying, fetchQueue, fetchTopTracks } from "./services";

export type ITopTracks = Pick<Song, "name" | "href"> & { artists: string[] };
export type ICurrentlyPlaying = ITopTracks & { is_playing: boolean };

interface JamProps {
  tracks: ITopTracks[];
  listening_to: ICurrentlyPlaying;
  queue: Song[];
}

export default function Jams({ tracks, listening_to, queue }: JamProps) {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    if (tracks && listening_to && queue) setLoading(false);
  }, [tracks, listening_to, queue]);

  if (loading) {
    return (
      <div className="flex flex-col items-start justify-center w-full">
        loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start justify-center w-full">
      <h1 className="text-3xl">Jared&apos;s Jams</h1>
      <ListeningTo currently_playing={listening_to} />
      <TopTracks tracks={tracks} />
      <Queue queue={queue}/>
    </div>
  );
}

export async function getServerSideProps() {
  const tracks = await fetchTopTracks()
  const currently_playing = await fetchCurrentlyPlaying()
  const queue = await fetchQueue()

  return { props: { tracks, listening_to: currently_playing, queue } };
}
