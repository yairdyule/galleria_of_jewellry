import React from "react";
import { ICurrentlyPlaying } from "../../pages/jams";
import { fetchCurrentlyPlaying } from "../../services";
import Loading from "../loading";

export default function ListeningTo() {
  const [currentlyPlaying, setCurrentlyPlaying] =
    React.useState<ICurrentlyPlaying>({
      name: "loading...",
      href: "",
      artists: [],
      is_playing: false,
      id: "",
    });

  const [loading, setLoading] = React.useState(true);

  const loadData = async () => {
    const playing = await fetchCurrentlyPlaying();
    console.log(playing);
    setCurrentlyPlaying(playing);
    setLoading(false);
  };

  React.useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!currentlyPlaying.is_playing) {
    return (
      <h3 className="pt-4 text-neutral-300 text-lg transition-all duration-100 hover:scale-100">
        Last spotted listening to:{" "}
        <a
          className="text-neutral-400 hover:text-emerald-500"
          href={currentlyPlaying.href}
          target="_blank"
          rel="noreferrer"
        >
          {currentlyPlaying.name} - {currentlyPlaying.artists}
        </a>
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
