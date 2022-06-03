import React from "react";
import { IoMdAdd } from "react-icons/io";
import { FaSpinner } from "react-icons/fa";
import { Song } from "../../pages/api/lib/spotify.d";
import { addToQueue, fetchQueue } from "../../services";
import AddSongModal from "../addSongModal";
import Loading from "../loading";

export default function Queue() {
  const [queue, setQueue] = React.useState<Song[]>([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const loadData = async () => {
    setLoading(true);
    setQueue(await fetchQueue());
    setLoading(false);
  };

  React.useEffect(() => {
    loadData();
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      loadData();
    }, 1500);
  }, [modalOpen]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="pt-6 w-72 md:w-10/12 flex-col gap-1 items-center justify-center">
      <h3 className="text-lg  border-b-2 border-b-emerald-300 mb-1 pb-1">
        Visitor Suggestions
      </h3>
      <ul>
        {queue &&
          queue
            // .reverse()
            // .slice(0, 10)
            .map((q, i) => {
              const artists = q.artists.map((a) => a.name).join(", ");
              return (
                <a
                  key={i}
                  href={q.external_urls.spotify}
                  target="_blank"
                  rel="noreferrer"
                >
                  <li className="text-md text-neutral-600 transition hover:text-emerald-400 hover:translate-x-1 border-b border-b-slate-300">
                    {q.name} - {artists}
                  </li>
                </a>
              );
            })}
        <button
          className="w-full h-5 group transition hover:translate-x-1"
          onClick={() => setModalOpen(true)}
        >
          <li className="w-full text-md text-neutral-600 pt-1 flex flex-row justify-start items-center group-hover:text-emerald-400">
            <IoMdAdd className="text-lg " />
            Add your own!
          </li>
        </button>
      </ul>

      {modalOpen && (
        <AddSongModal
          isOpen={modalOpen}
          setIsOpen={setModalOpen}
          addToQueue={addToQueue}
          loadData={loadData}
        />
      )}
    </div>
  );
}
