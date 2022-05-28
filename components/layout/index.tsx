import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { BreadCrumbs } from "../breadCrumbs";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const [path, setPath] = React.useState<string[]>([]);
  React.useEffect(() => {
    setPath(
      ["home"].concat(router.asPath.split("/").filter((sub) => sub.length > 0))
    );
  }, [router.asPath]);
  return (
    <div className="flex flex-col justify-center items-center">
      <Head>
        <title>Jared Jewell</title>
        <meta name="description" content="A web-dev extraordinaire" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen max-w-2xl px-8 py-16 flex flex-1 flex-col justify-start items-center">
        <BreadCrumbs path={path} />
        {children}
      </main>
    </div>
  );
}
