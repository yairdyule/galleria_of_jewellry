import { Combobox, Dialog } from "@headlessui/react";
import React from "react";
import { GrAdd } from "react-icons/gr";
import { Song } from "../../pages/api/lib/spotify.d";
import {
  addToQueue,
  fetchQueue,
  SearchResult,
  searchSong,
} from "../../pages/services";

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
      console.log("effecting");
      loadData();
    }, 3000);
  }, [modalOpen]);

  if (loading) {
    <div className="pt-6 flex-col gap-1 items-center justify-center">
      loading...
    </div>;
  }

  return (
    <div className="pt-6 flex-col gap-1 items-center justify-center">
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
                <a key={i} href={q.href} target="_blank" rel="noreferrer">
                  <li className="text-md text-neutral-600 transition hover:text-emerald-400 hover:translate-x-1 border-b border-b-slate-300">
                    {q.name} - {artists}
                  </li>
                </a>
              );
            })}
        <li className="text-md h-5 text-neutral-600 transition hover:text-emerald-400 hover:translate-y-1 flex flex-row items-center justify-center">
          <GrAdd className="text-md" onClick={() => setModalOpen(true)} />
        </li>
      </ul>

      {modalOpen && (
        <AddSongModal isOpen={modalOpen} setIsOpen={setModalOpen} />
      )}
    </div>
  );
}

function AddSongModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (a: boolean) => void;
}) {
  const [selectedSong, setSelectedSong] = React.useState("");
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState<SearchResult[]>([]);

  const filteredResults =
    query === ""
      ? results
      : results.filter(({ name, artists }) => {
        return testQuery(query, name + " " + artists);
      });

  React.useEffect(() => {
    searchQuery(query);
  }, [query]);

  const searchQuery = async (query: string) => {
    if (query !== "") {
      let data = await searchSong(query);
      setResults(data);
    }
  };

  const handleSubmit = async (song_id: string) => {
    addToQueue(song_id);
    setIsOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex flex-col items-center justify-center p-4">
        <Dialog.Panel className="w-full h-80 max-w-sm rounded-lg bg-white flex flex-col justify-start py-3 items-center">
          <Dialog.Title className="text-xl">Add a suggestion</Dialog.Title>
          <Combobox value={selectedSong} onChange={setSelectedSong}>
            <Combobox.Input
              onChange={(event) => setQuery(event.target.value)}
              className="shadow-md border-2 rounded-md pl-2 border-emerald-400 focus:ring-2 focus:border-none active:ring-0"
              placeholder="Enter a song name"
            />
            <Combobox.Options className="px-4 w-full">
              {filteredResults.map(({ name, id, artists }) => (
                <Combobox.Option
                  key={id}
                  value={name}
                  className="border-b flex flex-row border-b-neutral-300 w-full overflow-x-hidden hover:text-emerald-400"
                  onClick={() => {
                    handleSubmit(id);
                  }}
                >
                  {name} - {artists}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Combobox>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

/**
 * deeply obliged, Marcelo
 * https://gist.github.com/marcelo-ribeiro/abd651b889e4a20e0bab558a05d38d77
 * thank you for allowing me to find Björk.
 */
const removeAccents = (text: string) =>
  text.normalize("NFD").replace(/\p{Diacritic}/gu, "");

const testQuery = (query: string, test_string: string) => {
  const q = new RegExp(query.toLowerCase().replaceAll(" ", ".*") + ".*");
  const test_against = removeAccents(test_string).toLowerCase();
  return q.test(test_against);
};
