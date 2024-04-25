import React from "react";

import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constants";
import AuthProvider from "@/components/authProvider";

function Navbar() {
  const session = null;
  return (
    <nav className="sticky top-0 z-50 flexBetween py-5 px-8 border-b border-nav-border bg-white gap-4">
      <div className="flex-1 flexStart gap-10">
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session ? (
          <>
            UserPhoto
            <Link href="/create-project">Share Work</Link>
          </>
        ) : (
          <AuthProvider />
        )}
         {/* <button className="btn btn-primary">Get Started</button> */}
      </div>{" "}
    </nav>
  );
}

export default Navbar;
