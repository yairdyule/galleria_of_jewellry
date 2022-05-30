import React from "react";
import Fuse from "fuse.js";
import { SearchResult } from "../../pages/api/search-tracks/[query]";
import { searchSong } from "../../services";
import { Dialog } from "@headlessui/react";
import { Combobox } from "@headlessui/react";

export default function AddSongModal({
  isOpen,
  setIsOpen,
  addToQueue,
  loadData,
}: {
  isOpen: boolean;
  setIsOpen: (a: boolean) => void;
  addToQueue: (s: string) => Promise<void>;
  loadData: () => Promise<void>;
}) {
  const [selectedSong, setSelectedSong] = React.useState("");
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState<SearchResult[]>([]);
  const [filteredResults, setFilteredResults] = React.useState<SearchResult[]>(
    []
  );
  const [showAddButton, setShowAddButton] = React.useState<false>(false);

  React.useEffect(() => {
    searchQuery();
    filterResults();
  }, [query]);

  const filterResults = () => {
    const fuse = new Fuse(results, { keys: ["name", "artists"] });
    const fuseResults = fuse.search(query).map((i) => i.item);
    setFilteredResults(fuseResults);
  };

  const searchQuery = async () => {
    if (query !== "") {
      let data = await searchSong(query);
      setResults(data);
      console.log(data);
    }
  };

  const handleSubmit = async (song_id: string) => {
    await addToQueue(song_id);
    setIsOpen(false);
    await loadData();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex flex-col items-center justify-center p-4">
        <Dialog.Panel className="w-full h-96  max-w-sm rounded-lg bg-white flex flex-col justify-start py-3 items-center overflow-scroll">
          <Dialog.Title className="text-neutral-600 text-lg">
            Search a song
          </Dialog.Title>
          <Combobox value={selectedSong} onChange={setSelectedSong}>
            <Combobox.Input
              onChange={(event) => setQuery(event.target.value)}
              className="text-base shadow-md border-2 rounded-md pl-2" //todo: figure out the orange ring
              placeholder="Enter a song name"
            />
            <Combobox.Options className="px-4 w-full pt-2">
              {filteredResults.map(({ name, id, artists }) => (
                <Combobox.Option
                  key={id}
                  value={name}
                  className="border-b text-sm text-neutral-600 flex flex-row border-b-neutral-300 w-full overflow-x-hidden transition-all hover:text-emerald-400 hover:translate-x-1 py-1 hover:cursor-pointer"
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
