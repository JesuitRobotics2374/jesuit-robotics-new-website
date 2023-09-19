"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // get the current scroll position
      var scrollPosition = window.scrollY;
      console.log(scrollPosition);
      if (scrollPosition > 100) {
        setNavbarState(true);
      } else {
        setNavbarState(false);
      }
    });
  }, []);
  return (
    <>
      <div
        className={`${
          navbarState &&
          "bg-gradient-to-r from-green-50/75 via-green-100/80 to-green-50/70 backdrop-blur-lg duration-200 justify-evenly"
        } duration-200 p-10 py-5 w-full fixed select-none flex justify-between items-center gap-10 z-40`}
      >
        <Link href="/">
          <Image
            src="/logos/green-logo-scaled-down.png"
            alt="Jesuit Crusader Bots Logo"
            width={300}
            height={300}
            className="rounded-full w-24 h-24 select-none"
            draggable="false"
          />
        </Link>
        <div className=" w-3/4 lg:w-4/6 flex justify-evenly items-center gap-4 navbar-elements">
          <Link href="/">
            <h4>Home</h4>
          </Link>
          <Link href="/about">
            <h4>About</h4>
          </Link>
          <Link href="/robots">
            <h4>Robots</h4>
          </Link>
          <Link href="/events">
            <h4>Events</h4>
          </Link>
          <button className="button-outline">Support</button>
        </div>
      </div>
      <div className="w-full h-32" />
    </>
  );
}
