import React from "react";
import { ICurrentlyPlaying } from "../../pages/jams";
import { fetchCurrentlyPlaying } from "../../services";

export default function ListeningTo() {
  const [currentlyPlaying, setCurrentlyPlaying] =
    React.useState<ICurrentlyPlaying>({
      name: "loading...",
      href: "",
      artists: [],
      is_playing: false,
    });

  const loadData = async () => {
    const playing = await fetchCurrentlyPlaying();
    setCurrentlyPlaying(playing);
  };

  React.useEffect(() => {loadData() }, []);

  if (!currentlyPlaying.is_playing) {
    return (
      <h3 className="text-neutral-400">
        Oddly enough, I&apos;m not listening to anything currently.
      </h3>
    );
  }

  return (
    <h3 className="pt-4  text-lg transition-all duration-100 hover:scale-100">
      Listening to:{" "}
      <a
        className="text-emerald-400"
        href={currentlyPlaying.href}
        target="_blank"
        rel="noreferrer"
      >
        {currentlyPlaying.name} - {currentlyPlaying.artists}
      </a>
    </h3>
  );
}
