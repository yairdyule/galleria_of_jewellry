import Head from "next/head";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="py-0 px-8">
      <Head>
        <title>Jared Jewell</title>
        <meta name="description" content="A web-dev extraordinaire" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen px-0 py-16 flex flex-1 flex-col justify-center items-center">
        {children}
      </main>
    </div>
  );
}
