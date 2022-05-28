import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

const Header = () => {
  return (
    <div className="text-center flex flex-col gap-3 md:gap-1">
      <h1 className="text-3xl">
        <EmphSpan>&lt;</EmphSpan> Hello, world!{" "}
        <br className="md:hidden mr-8" />
        I&apos;m Jared. <EmphSpan>/&gt;</EmphSpan>
      </h1>

      <p className="text-neutral-400">
        <EmphSpan>{"/*"}</EmphSpan> a passionate web developer{" "}
        <br className="md:hidden mr-8" />
        and self-improver <EmphSpan>{"*/"}</EmphSpan>
      </p>
    </div>
  );
};

const Main = () => {
  const cardStyles =
    "flex flex-col justify-center items-center text-neutral-400 md:m-4 md:p-6 text-left text-inherit border border-neutral-200 rounded-lg w-48 h-16 hover:text-emerald-400 hover:border-emerald-300 active:text-emerald-400 active:border-emerald-300 focus:text-emerald-400 focus:border-emerald-300 transition ";
  const gridStyles =
    "grid grid-flow-row grid-cols-1 md:grid-cols-2 mt-3 md:mt-2 gap-2";

  return (
    <div className={gridStyles}>
      <Link href="/about" passHref>
        <a className={cardStyles}>
          <h2 className="text-md text-inherit">About</h2>
          <p className="text-sm text-inherit">Learn about me.</p>
        </a>
      </Link>

      <Link href="/experience">
        <a className={cardStyles}>
          <h2 className="text-md text-inherit">Experience</h2>
          <p className="text-sm text-inherit">See what I&apos;ve done.</p>
        </a>
      </Link>
    </div>
  );
};

const EmphSpan = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-emerald-400 font-medium">{children}</span>;
};

export default Home;
