import { Link } from "@/i18n/routing";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-950">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link href="/">
                <Image src="/logo.svg" alt="Logo" width={40} height={40} />
              </Link>
            </div>
            <div className="hidden sm:ml-auto sm:block">
              <div className="flex space-x-2 items-center">
                <h4 className="text-white">Total:</h4>
                <h4 className="text-white text-3xl">$300</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
