import { Anton } from "next/font/google";
import Image from "next/image";

const anton = Anton({ subsets: ["latin"], weight: ["400"] });

export default function TitleIntro() {
  return (
    <div className="w-full h-[75vh] flex items-center flex-col justify-evenly bg-gradient-to-br from-green-600 via-green-700 to-green-950 text-transparent bg-clip-text">
      <div className="flex items-center justify-center flex-col gap-4 select-none">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase font-semibold tracking-wider z-30">
          Team
        </h2>
        <span
          className={`${anton} text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold md:tracking-wide`}
        >
          2&#160;3&#160;7&#160;4
        </span>
      </div>
      <h5 className="text-center max-w-sm">
        Team 2374 Crusaderbots is a FIRST Robotics Competition Team based out of
        Jesuit High School, in Portland, Oregon.
      </h5>

      <Image
        src="/svg/decoration-wave-1.svg"
        width={600}
        height={600}
        alt=""
        className="lg:hidden absolute top-0 right-0 z-20 select-none"
        priority={true}
        draggable="false"
        // onLoadingComplete={() =>

        // }
      />
      <Image
        src="/svg/decoration-wave-2.svg"
        width={900}
        height={9000}
        alt=""
        className="hidden lg:block absolute top-0 right-0 z-20 select-none"
        priority={true}
        draggable="false"
        // onLoadingComplete={() =>

        // }
      />
      <Image
        src="/svg/circuit-board.svg"
        width={1000}
        height={1000}
        alt=""
        className="absolute z-20 select-none"
        priority={true}
        draggable="false"
        // onLoadingComplete={() =>

        // }
      />

      <button className="button-outline z-30">Support the team!</button>
      {/* <div className="absolute bottom-10">
        <span>Scroll to learn more</span>
      </div> */}
    </div>
  );
}
