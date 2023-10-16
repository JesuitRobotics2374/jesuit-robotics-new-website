"use client";

import {
  textContainer,
  textVariant2,
} from "@/app/libraries/framer-motion-utils";
import { motion } from "framer-motion";

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`text-secondary-white text-[14px] font-normal ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h6
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`${textStyles}`}
  >
    {title}
  </motion.h6>
);
