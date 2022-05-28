import { ITopTracks } from "../../pages/about";

interface TopTracksProps {
  tracks: ITopTracks[];
}

export default function TopTracks({ tracks }: TopTracksProps) {
  return (
    <div className="flex-col gap-1 items-center justify-center">
      <h3 className="text-sm text-neutral-600 border-b border-b-gray-300 mb-1 pb-1">
        Recent Favorites
      </h3>
      <ul>
        {tracks &&
          tracks.map((t, i) => {
            return (
              <a key={i} href={t.href} target="_blank" rel="noreferrer">
                <li className="text-xs text-neutral-500 transition hover:text-emerald-400 hover:translate-x-1">
                  {t.name} - {t.artists}
                </li>
              </a>
            );
          })}
      </ul>
    </div>
  );
}
