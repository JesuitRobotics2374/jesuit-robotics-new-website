import Image from "next/image";

export default function ListLink({ name, link, iconPath }) {
  return (
    <a
      href={link}
      target="_blank"
      className="hover-zoom h-20 w-20 cursor-pointer select-none rounded-full bg-green-600"
    >
      <Image
        src={iconPath}
        width={400}
        height={400}
        alt={name}
        draggable="false"
        priority
      />
    </a>
  );
}
