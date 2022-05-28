import Link from "next/link";

const Crumb = ({ href, isLast = false }: { href: string; isLast: boolean }) => {
  if (isLast) {
    return <li className="text-emerald-400">{"/" + href}</li>;
  }

  return (
    <Link passHref href={href === "home" ? "/" : "/" + href}>
      <a>
        <li>{"/" + href}</li>
      </a>
    </Link>
  );
};

export const BreadCrumbs = ({ path }: { path: string[] }) => {
  return (
    <ul className="flex flex-row text-sm text-neutral-500">
      {path.map((segment, ind) => {
        return (
          <Crumb key={ind} href={segment} isLast={ind === path.length - 1} />
        );
      })}
    </ul>
  );
};
