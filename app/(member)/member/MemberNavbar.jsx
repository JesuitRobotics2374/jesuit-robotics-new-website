"use client";

import Image from "next/image";
import Link from "next/link";
import UserPhoto from "@/app/components/account/UserPhoto";

const navbarLinks = [
  { id: 1, name: "Home", link: "/member" },
  { id: 2, name: "Docs", link: "/member/docs" },
  { id: 3, name: "Daily Board", link: "/member/daily-board" },
];

export default function MemberNavbar() {
  return (
    <>
      <div
        className={`fixed z-40 flex w-full select-none items-center justify-between gap-10 p-10 py-5`}
      >
        <Link href="/" className="hover-zoom">
          <Image
            src="/logos/green-logo-scaled-down.png"
            alt="Jesuit Crusader Bots Logo"
            width={300}
            height={300}
            className="h-24 w-24 select-none rounded-full bg-gradient-to-br dark:from-green-200/60 dark:to-green-200/80"
            draggable="false"
            priority
          />
        </Link>

        <div className="flex items-center justify-evenly gap-10">
          {navbarLinks.map((link) => (
            <Link key={link.id} href={link.link}>
              <h4 className="hover-zoom">{link.name}</h4>
            </Link>
          ))}
          <Link href="/">
            <button className="button-outline large-button">
              Public website
            </button>
          </Link>
          <Link href="/member/account" className="hover-zoom">
            <UserPhoto size="12" />
          </Link>
        </div>
      </div>
      <div className="h-32 w-full" />
    </>
  );
}
