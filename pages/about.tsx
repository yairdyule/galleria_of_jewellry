import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col gap-2 items-start justify-center">
      <h1 className="text-3xl">Jared Jewell</h1>
      <p className="text-xl text-neutral-800">
        I&apos;m a web developer who loves music and adventure. I also enjoy
        mountain biking, cooking, skiing, and meditation.
      </p>

      <p className="text-xl text-neutral-800">
        I&apos;ll figure out other stuff to put here. For the time being, check
        out my{" "}
        <Link passHref href="/jams">
          <a className="text-emerald-400">favorite songs</a>
        </Link>
        .
      </p>
    </div>
  );
}
