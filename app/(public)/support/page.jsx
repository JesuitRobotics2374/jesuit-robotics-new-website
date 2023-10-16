import Image from "next/image";
import Link from "next/link";

const supportLinks = [
  {
    id: 1,
    name: "Wish List",
    description:
      "Help us purchase items that do not fit into our budget but would benefit our team and contribute to the growth and development of each member.",
    link: "wish-list",
    image: "/svg/circuit-board-animated.svg",
    imageAlt: "Scientist working on circuit board.",
    imageWidth: 250,
    buttonText: "Contribute",
  },
  {
    id: 2,
    name: "Volunteer",
    description:
      "Help us with lunches & dinners, mentoring, or even with sewing!",
    link: "volunteer",
    image: "/svg/helping-animated.svg",
    imageAlt: "Person helping someone climb.",
    imageWidth: 300,
    buttonText: "Volunteer",
  },
];

export default function Support() {
  return (
    <div>
      <h1>Support The Team</h1>

      <div className="my-5 grid gap-5 2xl:grid-cols-2">
        {supportLinks.map((link) => (
          <div
            key={link.id}
            className="main-green-bg mx-auto flex h-full w-full max-w-2xl items-center justify-between rounded-3xl p-8"
          >
            <div className="flex flex-col gap-6">
              <h2 className="p-0">{link.name}</h2>
              <p className="max-w-xs">{link.description}</p>
              <Link href={"/support/" + link.link} className="w-fit">
                <button className="button-outline">{link.buttonText}</button>
              </Link>
            </div>
            <Image
              src={link.image}
              width={link.imageWidth}
              height={link.imageWidth}
              alt={link.imageAlt}
              draggable="false"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}
