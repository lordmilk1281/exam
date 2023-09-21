import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const pages = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/about",
    name: "About",
  },
];

const NavBar = (props: Props) => {
  return (
    <nav className="border">
      <div className="mx-auto container py-3 px-8 flex items-center justify-between gap-x-4">
        <div className="flex items-center gap-x-4">
        <span className="text-3xl font-bold">App</span>
          {pages.map(page => (
            <Link key={page.name} href={page.href} className="border py-2 px-8 rounded-md text-sm hover:shadow-md">
              {page.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
