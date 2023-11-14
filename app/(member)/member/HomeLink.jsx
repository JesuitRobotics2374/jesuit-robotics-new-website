import Image from "next/image";
import Link from "next/link";

export default function HomeLink({ name, imagePath, link }) {
  return (
    <Link
      href={link}
      className="hover-zoom flex flex-col items-center justify-center rounded-3xl p-8"
    >
      <Image
        src={imagePath}
        className="h-60 w-60"
        width={500}
        height={500}
        priority
        draggable="false"
        alt=""
      />
      <h2 className="p-0">{name}</h2>
    </Link>
  );
}
