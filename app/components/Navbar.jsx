"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  useLayoutEffect(() => {
    // When the page loads
    // Get the current scroll position
    var scrollPosition = window.scrollY;
    console.log(scrollPosition);
    if (scrollPosition > 100) {
      setNavbarState(true);
    } else {
      setNavbarState(false);
    }

    // When the user scrolls
    window.addEventListener("scroll", () => {
      // Get the current scroll position
      var scrollPosition = window.scrollY;
      // console.log(scrollPosition);
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
          "bg-gradient-to-r from-green-50/75 dark:from-green-200/75 via-green-100/80 dark:via-green-300/80 to-green-50/70 dark:to-green-200/80 backdrop-blur-lg duration-200 justify-evenly"
        } duration-200 p-10 py-5 w-full fixed select-none flex justify-between items-center gap-10 z-40`}
      >
        <Link href="/" className="hover:scale-110 active:scale-90 duration-150">
          <Image
            src="/logos/green-logo-scaled-down.png"
            alt="Jesuit Crusader Bots Logo"
            width={300}
            height={300}
            className="rounded-full w-24 h-24 bg-gradient-to-br dark:from-black/70 dark:to-black select-none"
            draggable="false"
          />
        </Link>
        <div className=" w-3/4 lg:w-4/6 flex justify-evenly items-center gap-4 navbar-elements dark:text-black">
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
          <Link href="/support">
            <button className="button-outline">Support</button>
          </Link>
        </div>
      </div>
      <div className="w-full h-32" />
    </>
  );
}
