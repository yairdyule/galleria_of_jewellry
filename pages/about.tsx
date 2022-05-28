import ListeningTo from "../components/listeningTo";
import TopTracks from "../components/topTracks";
import { Song } from "./api/lib/spotify.d";

export type ITopTracks = Pick<Song, "name" | "href"> & { artists: string[] };
export type ICurrentlyPlaying = ITopTracks & { is_playing: boolean };

interface AboutProps {
  tracks: ITopTracks[];
  listening_to: ICurrentlyPlaying;
}

export default function About({ tracks, listening_to }: AboutProps) {
  return (
    <div className="flex flex-col gap-2 items-start justify-center">
      <h1 className="text-2xl">Jared Jewell</h1>
      <p className="text-base text-neutral-800">
        I&apos;m a web developer who loves music and adventure. I also enjoy
        mountain biking, cooking, skiing, and meditation.
      </p>
      <ListeningTo currently_playing={listening_to} />
      <TopTracks tracks={tracks} />
    </div>
  );
}

export async function getServerSideProps() {
  const { tracks } = await fetch("http://localhost:3000/api/top-tracks").then(
    (d) => d.json()
  );

  const currently_playing = (await fetch(
    "http://localhost:3000/api/currently-playing"
  ).then((d) => d.json())) as ICurrentlyPlaying;

  return { props: { tracks, listening_to: currently_playing } };
}
