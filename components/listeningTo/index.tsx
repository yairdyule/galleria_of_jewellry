import { ICurrentlyPlaying } from "../../pages/about";

interface ListeningToProps {
  currently_playing: ICurrentlyPlaying;
}

export default function ListeningTo({ currently_playing }: ListeningToProps) {
  if (!currently_playing.is_playing) {
    return (
      <h3 className="text-neutral-400">
        Oddly enough, I&apos;m not listening to anything currently.
      </h3>
    );
  }

  return (
    <h3 className="text-neutral-500 text-sm transition-all duration-100 hover:scale-100">
      Listening to:{" "}
      <a
        className="text-emerald-400"
        href={currently_playing.href}
        target="_blank"
        rel='noreferrer'
      >
        {currently_playing.name} - {currently_playing.artists}
      </a>
    </h3>
  );
}
