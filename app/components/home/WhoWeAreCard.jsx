import Image from "next/image";
import Link from "next/link";

export default function WhoWeAreCard() {
  return (
    <section className="mb-20 mt-10">
      <div className="relative mx-auto max-w-2xl rounded-3xl lg:right-[15%]">
        <Image
          src="/photos/group-photo.webp"
          width={2048}
          height={1363}
          draggable={false}
          className="rounded-3xl"
          alt="Group photo of the Jesuit Robotics Club with their creation, the robot, in front of them."
        />
        <div className="absolute left-0 top-0 h-full w-full rounded-3xl bg-gradient-to-br from-transparent via-transparent to-green-800/80" />
      </div>
      <div className="main-green-bg relative mx-auto mt-5 max-w-2xl rounded-3xl p-10 lg:left-[15%] lg:-mt-10">
        <h3 className="pb-5">Who We Are</h3>
        <h5>
          Team 2374 Crusaderbots is a FIRST Robotics Competition Team based out
          of Jesuit High School, in Portland, Oregon. Students work together to
          build robots for competitions and learn invaluable science and
          technical engineering skills. New members are always welcome, no
          experience is required!
        </h5>
        <Link href="/about">
          <button className="button-outline mt-5">Learn more</button>
        </Link>
      </div>
    </section>
  );
}
