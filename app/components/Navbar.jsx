"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { fadeIn, navVariants, zoomIn } from "../libraries/framer-motion-utils";
import { motion } from "framer-motion";

const navbarLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Robots",
    link: "/robots",
  },
  {
    id: 4,
    title: "Events",
    link: "/events",
  },
  {
    id: 5,
    title: (
      <button className="button-outline large-button border-[2.4px] text-2xl">
        Support
      </button>
    ),
    link: "/support",
  },
];

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const [currentPathname, setCurrentPathname] = useState();

  const pathname = usePathname();

  useLayoutEffect(() => {
    setCurrentPathname(pathname);
  }, [pathname]);

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
      <motion.nav
        variants={{
          hidden: {
            opacity: 0,
            y: -50,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 140,
            },
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 80,
              delay: currentPathname == "/" ? 1.3 : 0.1,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        className={`${
          navbarState &&
          "justify-evenly bg-gradient-to-r from-green-50/75 via-green-100/80 to-green-50/70 backdrop-blur-lg duration-200 dark:from-green-200/75 dark:via-green-300/80 dark:to-green-200/80"
        } fixed z-40 flex w-full select-none items-center justify-between gap-10 p-10 py-5 duration-200`}
      >
        <Link href="/" className="hover-zoom">
          <Image
            src="/logos/green-logo-scaled-down.png"
            alt="Jesuit Crusader Bots Logo"
            width={300}
            height={300}
            className="h-24 w-24 select-none rounded-full bg-gradient-to-br dark:from-black/70 dark:to-black"
            draggable="false"
            priority
          />
        </Link>
        <div className="flex w-3/4 items-center justify-evenly gap-4 lg:w-4/6">
          {navbarLinks.map((link) => (
            // <motion.span
            //   variants={
            //     currentPathname == "/" && zoomIn(link.id * 0.1 + 0.5, 0.2)
            //   }
            //   key={link.id}
            // >

            <div
              key={link.id}
              className={
                link.id != 5 &&
                "group relative flex cursor-pointer flex-wrap items-center justify-center gap-1 overflow-hidden transition duration-300 ease-in-out"
              }
            >
              <Link href={link.link}>
                <h4 className={currentPathname == link.link ? "font-bold" : ""}>
                  {link.title}
                </h4>
              </Link>
              {link.id != 5 && (
                <div className="absolute bottom-0 right-full h-[0.2rem] w-full rounded-full bg-green-700 opacity-0 duration-300 group-hover:translate-x-full group-hover:opacity-100 group-active:bg-green-700 dark:bg-green-200 dark:group-hover:bg-green-200 dark:group-active:bg-green-300" />
              )}
            </div>
            // </motion.span>
          ))}
        </div>
      </motion.nav>
      <div className="h-32 w-full" />
    </>
  );
}
// zoomIn(link.id * 0.1 + 0.5, 0.2)
