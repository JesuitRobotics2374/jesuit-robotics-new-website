import Image from "next/image";

export default function ListLink({ name, link, iconPath }) {
  return (
    <a
      href={link}
      target="_blank"
      className="cursor-pointer bg-green-600 rounded-full w-20 h-20 hover:scale-105 active:scale-95 duration-200 select-none"
    >
      <Image
        src={iconPath}
        width={400}
        height={400}
        alt={name}
        draggable="false"
      />
    </a>
  );
}
