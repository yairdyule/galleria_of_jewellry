import React, { useEffect } from "react";
import ListeningTo from "../components/listeningTo";
import TopTracks from "../components/topTracks";
import { Song } from "./api/lib/spotify.d";

export type ITopTracks = Pick<Song, "name" | "href"> & { artists: string[] };
export type ICurrentlyPlaying = ITopTracks & { is_playing: boolean };

interface JamProps {
  tracks: ITopTracks[];
  listening_to: ICurrentlyPlaying;
}

export default function Jams({ tracks, listening_to }: JamProps) {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    if (tracks && listening_to) setLoading(false);
  }, [tracks, listening_to]);

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
    </div>
  );
}

export async function getServerSideProps() {
  const BASE_API_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://jaredjewell.dev";

  const { tracks } = await fetch(`${BASE_API_URL}/api/top-tracks`).then((d) =>
    d.json()
  );

  const currently_playing = (await fetch(
    `${BASE_API_URL}/api/currently-playing`
  ).then((d) => d.json())) as ICurrentlyPlaying;

  return { props: { tracks, listening_to: currently_playing } };
}
