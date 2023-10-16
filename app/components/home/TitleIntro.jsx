"use client";

import { Anton } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant,
  zoomIn,
} from "@/app/libraries/framer-motion-utils";

const anton = Anton({ subsets: ["latin"], weight: ["400"] });

export default function TitleIntro() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className="flex h-[75vh] w-full flex-col items-center justify-evenly "
    >
      <div className="to-green-7000 flex select-none flex-col items-center justify-center gap-4 bg-gradient-to-b from-green-600 via-green-600 to-green-800 bg-clip-text text-transparent">
        <motion.span
          variants={textVariant(0.4)}
          className="z-30 inline-block bg-gradient-to-br bg-clip-text py-6 text-5xl font-semibold uppercase tracking-wider text-transparent sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Team
        </motion.span>
        <motion.span
          variants={textVariant(0.5)}
          className={`${anton} inline-block bg-gradient-to-br bg-clip-text text-7xl font-bold text-transparent sm:text-8xl md:text-9xl md:tracking-wide lg:text-[10rem]`}
        >
          2&#160;3&#160;7&#160;4
        </motion.span>
      </div>
      <motion.h5 className="max-w-sm text-center" variants={textVariant(0.7)}>
        Team 2374 Crusaderbots is a FIRST Robotics Competition Team based out of
        Jesuit High School, in Portland, Oregon.
      </motion.h5>

      {/* For Small Screens */}
      <motion.div
        variants={slideIn("right", "spring", 0, 0.5)}
        className="absolute -right-4 top-0 z-20 select-none lg:hidden"
      >
        <Image
          src="/svg/decoration-wave-1.svg"
          width={600}
          height={600}
          alt=""
          priority
          draggable="false"
        />
      </motion.div>

      {/* For Large Screens */}
      <motion.div
        variants={slideIn("right", "spring", 0, 0.5)}
        className="absolute -right-10 top-0 z-20 hidden select-none lg:block"
      >
        <Image
          src="/svg/decoration-wave-2.svg"
          width={900}
          height={900}
          alt=""
          priority
          draggable="false"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 z-20 select-none"
        variants={slideIn("left", "spring", 0, 0.5)}
      >
        <Image
          src="/svg/decoration-wave-bottom-left.svg"
          width={250}
          height={250}
          alt=""
          priority
          draggable="false"
        />
      </motion.div>

      <motion.div
        variants={zoomIn(0.6, 0.8)}
        className="absolute z-20 select-none"
      >
        <Image
          src="/svg/circuit-board.svg"
          width={1000}
          height={1000}
          alt=""
          priority
          draggable="false"
        />
      </motion.div>

      <Link href="/support" className="z-30">
        <motion.button
          className="button-outline large-button"
          variants={fadeIn("up", "tween", 0.9, 0.2)}
        >
          Support the team!
        </motion.button>
      </Link>
    </motion.div>
  );
}
