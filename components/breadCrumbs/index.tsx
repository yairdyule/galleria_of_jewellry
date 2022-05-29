import Link from "next/link";

const Crumb = ({ href, isLast = false }: { href: string; isLast: boolean }) => {

  if (isLast) {
    return <li className="text-emerald-400">{"/" + href}</li>;
  }

  return (
    <Link passHref href={href === "home" ? "/" : "/" + href}>
      <a className='hover:text-emerald-400'>
        <li>{"/" + href}</li>
      </a>
    </Link>
  );
};

export const BreadCrumbs = ({ path }: { path: string[] }) => {
  return (
    <ul className="flex flex-row text-md text-neutral-500 pb-2 justify-start items-start ml-1 w-full">
      {path.map((segment, ind) => {
        return (
          <Crumb key={ind} href={segment} isLast={ind === path.length - 1} />
        );
      })}
    </ul>
  );
};
