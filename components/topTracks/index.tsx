import React from "react";
import { ITopTracks } from "../../pages/jams";
import { fetchTopTracks } from "../../services";

export default function TopTracks() {
  const [tracks, setTracks] = React.useState<ITopTracks[]>([]);
  const [loading, setLoading] = React.useState(true);

  const loadData = async () => {
    const tracks = await fetchTopTracks();
    setTracks(tracks);
  };

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="pt-6 w-72 md:w-10/12 flex-col gap-1 items-center justify-center">
      <h3 className="text-lg  border-b-2 border-b-emerald-300 mb-1 pb-1">
        Recent Favorites
      </h3>
      <ul>
        {tracks &&
          tracks.map((t, i) => {
            return (
              <a key={i} href={t.href} target="_blank" rel="noreferrer">
                <li className="text-md text-neutral-600 transition hover:text-emerald-400 hover:translate-x-1 border-b border-b-slate-300">
                  {t.name} - {t.artists}
                </li>
              </a>
            );
          })}
      </ul>
    </div>
  );
}
