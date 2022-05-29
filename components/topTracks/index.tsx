import { ITopTracks } from "../../pages/jams";

interface TopTracksProps {
  tracks: ITopTracks[];
}

export default function TopTracks({ tracks }: TopTracksProps) {
  return (
    <div className="pt-6 flex-col gap-1 items-center justify-center">
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
