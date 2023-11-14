import Link from "next/link";
import UserProfile from "../../components/account/UserProfile";
import Image from "next/image";
import HomeLink from "./HomeLink";

const homeLinksList = [
  {
    id: 1,
    name: "Docs",
    link: "/member/docs",
    imagePath: "/svg/member/documents-animated.svg",
  },
  {
    id: 2,
    name: "Daily Board",
    link: "/member/daily-board",
    imagePath: "/svg/member/board-animated.svg",
  },
  {
    id: 3,
    name: "Account",
    link: "/member/account",
    imagePath: "/svg/member/account-animated.svg",
  },
];

export default function Member() {
  return (
    <div>
      <UserProfile />
      <div className="mt-5 flex select-none items-center justify-center">
        {homeLinksList.map((link) => (
          <HomeLink
            key={link.id}
            name={link.name}
            link={link.link}
            imagePath={link.imagePath}
          />
        ))}
      </div>
    </div>
  );
}
