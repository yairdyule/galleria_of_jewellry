import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="md:flex-none flex flex-col gap-4 items-center justify-center">
      <Header />
      <Main />
    </div>
  );
};

const Header = () => {
  return (
    <div className="text-center flex flex-col gap-6 md:gap-3">
      <h1 className="text-4xl md:text-4xl">
        <EmphSpan>&lt;</EmphSpan> Hello, world!{" "}
        <br className="md:hidden mr-8" />
        I&apos;m Jared. <EmphSpan>/&gt;</EmphSpan>
      </h1>

      <p className="text-neutral-500 text-2xl md:text-xl">
        <EmphSpan>{"/*"}</EmphSpan> a passionate web developer{" "}
        {/* <br className="md:hidden mr-8" /> */}
        and self-improver <EmphSpan>{"*/"}</EmphSpan>
      </p>
    </div>
  );
};

const Main = () => {
  const cardStyles =
    "flex flex-col justify-center items-center text-neutral-500 md:m-4 md:p-6 text-left text-inherit border border-neutral-200 rounded-lg w-48 h-24 hover:text-emerald-400 hover:border-emerald-300 active:text-emerald-400 active:border-emerald-300 focus:text-emerald-400 focus:border-emerald-300 transition ";
  const gridStyles = "grid grid-flow-row grid-cols-1 md:grid-cols-2 mt-3 gap-6";

  return (
    <div className={gridStyles}>
      <Link href="/about" passHref>
        <a className={cardStyles}>
          <h2 className="text-xl text-emerald-400 md:text-inherit">About</h2>
          <p className="text-sm text-inherit">Learn about me.</p>
        </a>
      </Link>

      <Link href="/jams">
        <a className={cardStyles}>
          <h2 className="text-xl text-emerald-400 md:text-inherit ">
            Jams
          </h2>
          <p className="text-sm text-inherit">Music I&apos;m enjoying.</p>
        </a>
      </Link>

      <Link href="/experience">
        <a className={cardStyles}>
          <h2 className="text-xl text-emerald-400 md:text-inherit ">
            Past
          </h2>
          <p className="text-sm text-inherit">See what I&apos;ve done.</p>
        </a>
      </Link>
    </div>
  );
};

const EmphSpan = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-emerald-400">{children}</span>;
};

export default Home;
