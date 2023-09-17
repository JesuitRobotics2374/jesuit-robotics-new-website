import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="bg-gradient-to-r from-green-50/75 via-green-100/80 to-green-50/70 backdrop-blur-lg p-10 py-5 w-full fixed select-none flex justify-evenly items-center gap-10 z-30">
        <Link href="/">
          <Image
            src="/logos/gold-logo-scaled-down.png"
            alt="Jesuit Crusader Bots Logo"
            width="100"
            height="100"
            className="rounded-full w-20 select-none"
            draggable="false"
          />
        </Link>
        <div className=" w-3/4 flex justify-evenly items-center gap-4 navbar-elements">
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
