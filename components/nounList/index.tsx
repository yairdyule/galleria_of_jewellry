import { Transition } from "@headlessui/react";
import React from "react";

/**
 * @cite https://stackoverflow.com/a/47943825
 */
const replaceRandom = <T,>(arr: T[], value: T, index: number) => {
  const ret = arr.slice(0);
  ret[index] = value;
  return ret;
};

const selectRandomExclude = <T,>(arr: T[], toExclude: T[]) => {
  return randomize<T>(arr.filter((i) => !toExclude.includes(i)));
};
const randomize = <T,>(arr: T[]) => arr.sort(() => Math.random() - 0.5);

const nouns = [
  "Software Engineer",
  "Perpetual Pupil",
  "Terminal Taoist",
  "Snow lover",
  "Adventurer",
  "Hacker",
  "Bookworm",
  "Humanoid",
  "Dork",
  "Neovim Fanatic",
  "Ergonomicist",
  "Digital Native",
  "Earthling",
  "Everything Enthusiast",
];

const makeRandomSelectionOfLength = ({
  len,
  selectFrom,
  excludeFrom,
}: // sortDir,
{
  len: number;
  selectFrom: string[];
  excludeFrom: string[];
  // sortDir: "ascending" | "descending";
}) => {
  return selectRandomExclude(selectFrom, excludeFrom)
    .slice(0, len)
    .sort(
      (a, b) => b.length - a.length
      // sortDir == "ascending" ? b.length - a.length : a.length - b.length
    );
};
export default function NounList() {
  const [showList, setShowList] = React.useState(true);
  const [nounList, setNounList] = React.useState<string[]>(
    makeRandomSelectionOfLength({
      len: 3,
      selectFrom: nouns,
      excludeFrom: [],
      // sortDir: Math.random() > 0.5 ? "ascending" : "descending",
    })
  );

  const shuffle = () => {
    setNounList(
      makeRandomSelectionOfLength({
        len: 3,
        selectFrom: nouns,
        excludeFrom: nounList,
        // sortDir: Math.random() > 0.5 ? "ascending" : "descending",
      })
    );
  };

  const BEFORE_EXIT_MS = 3500;

  React.useEffect(() => {
    setShowList(true);
    const timer = setTimeout(() => {
      setShowList(false);
    }, BEFORE_EXIT_MS);
    return () => {
      clearTimeout(timer);
    };
  }, [nounList]);
  return (
    <div>
      <Transition
        appear={true}
        show={showList}
        afterLeave={shuffle}
        enter="transition transform ease-in-out delay-100 duration-300"
        enterFrom="opacity-0 -translate-x-2"
        enterTo="opacity-100 translate-x-0"
        leave={`transition transform ease-in-out duration-500 delay-300`}
        leaveFrom="opacity-100 -translate-x-1"
        leaveTo="opacity-0 translate-x-full"
      >
        <h3 className={`text-neutral-500 text-base`}>{nounList[0]}</h3>
      </Transition>
      <Transition
        appear={true}
        show={showList}
        enter="transition transform ease-in-out delay-100 duration-500"
        enterFrom="opacity-0 -translate-x-2"
        enterTo="opacity-100 translate-x-0"
        leave={`transition transform ease-in-out duration-500 delay-150`}
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-0 translate-x-full"
      >
        <h3 className={`text-neutral-500 text-base`}>{nounList[1]}</h3>
      </Transition>
      <Transition
        appear={true}
        show={showList}
        enter="transition transform ease-in-out delay-100 duration-700"
        enterFrom="opacity-0 -translate-x-2"
        enterTo="opacity-100 translate-x-0"
        leave={`transition transform ease-in-out duration-500 75`}
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-0 translate-x-full"
      >
        <h3 className={`text-neutral-500 text-base`}>{nounList[2]}</h3>
      </Transition>
    </div>
  );
}
