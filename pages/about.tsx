import Image from "next/image";
import Link from "next/link";
import React from "react";
import EmphSpan from "../components/emphSpan";
import NounList from "../components/nounList";

export default function About() {
  const textSize = "text-lg md:text-md";
  const pStyle = `${textSize} text-neutral-800 leading-8`;
  return (
    <div className="flex flex-col gap-6 items-start justify-center delay-100 delay-200">
      <div className="flex flex-row gap-4 items-center justify-center w-full">
        <div className="h-28 w-28 relative self-center rounded-full border-4 border-emerald-400">
          <Image
            src="/images/smiley.jpeg"
            objectFit="cover"
            layout="fill"
            className="rounded-full"
          />
        </div>
        <div className="w-48 h-28">
          <h1 className="text-2xl">Jared Jewell</h1>
          <NounList />
        </div>
      </div>
      <p className={pStyle}>
        I&apos;m a fullstack web developer who loves <EmphSpan>music</EmphSpan>{" "}
        and <EmphSpan>adventure</EmphSpan>. I also enjoy{" "}
        <EmphSpan>mountain biking</EmphSpan>,{"  "} <EmphSpan>skiing</EmphSpan>,{" "}
        <EmphSpan>cooking</EmphSpan>, and <EmphSpan>meditation</EmphSpan>.
      </p>

      <p className={pStyle}>
        I began my web development journey in a software development class taken
        during the third year of my Computer Science degree. After years of
        programming with the end-goal of printing something to the command line,
        I was enchanted by the prospect of making things that people could
        actually use.{" "}
      </p>

      <p className={pStyle}>
        I distinctly remember my amazement at building a website whose content
        was dynamically-generated and fetched from a server that I had built. I
        reflect upon this moment as the proverbial opening of Pandora&apos;s
        Box, when I realized that the possibilities with web development were
        endless!
      </p>

      <p className={pStyle}>
        I&apos;ll eventually figure out other stuff to put here. For the time
        being, check out my{" "}
        <Link passHref href="/jams">
          <a className="text-emerald-400">favorite songs</a>
        </Link>
        .
      </p>
    </div>
  );
}
