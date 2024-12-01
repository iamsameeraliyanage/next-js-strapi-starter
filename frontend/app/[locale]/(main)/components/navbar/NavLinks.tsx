"use client";

import { Link, usePathname } from "@/i18n/routing";
import React from "react";
import { NavLink } from "./Navbar";

const NavLinks = ({ navLinks }: { navLinks: NavLink[] }) => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  return (
    <>
      {navLinks.map((link: NavLink) => (
        <Link
          key={link.id}
          href={link.navlink}
          className={`rounded-md px-3 py-2 text-sm font-medium ${
            isActive(link.navlink)
              ? "bg-blue-900 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
