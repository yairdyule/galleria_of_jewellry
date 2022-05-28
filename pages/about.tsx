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
        I&apos;m a web developer who loves music and adventure. I enjoy mountain
        biking, cooking, skiing, and meditation.
      </p>
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

  console.log(process.env.NODE_ENV);

  const currently_playing = (await fetch(
    `${BASE_API_URL}/api/currently-playing`
  ).then((d) => d.json())) as ICurrentlyPlaying;

  return { props: { tracks, listening_to: currently_playing } };
}
