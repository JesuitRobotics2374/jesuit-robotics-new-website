import { Anton } from "next/font/google";

const anton = Anton({ subsets: ["latin"], weight: ["400"] });

export default function TitleIntro() {
  return (
    <div className="w-full h-[75vh] flex items-center flex-col justify-evenly bg-gradient-to-br from-green-600 via-green-700 to-green-950 text-transparent bg-clip-text select-none">
      <div className="flex items-center justify-center flex-col gap-4">
        <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase font-semibold tracking-wider">
          Team
        </span>
        <span
          className={`${anton} text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold md:tracking-wide`}
        >
          2&#160;3&#160;7&#160;4
        </span>
      </div>
      <button className="button-outline">Support the team!</button>
      {/* <div className="absolute bottom-10">
        <span>Scroll to learn more</span>
      </div> */}
    </div>
  );
}
