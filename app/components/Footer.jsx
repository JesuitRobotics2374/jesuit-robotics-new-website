"use client";

import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoYoutube,
} from "react-icons/bi";
import { HiMail } from "react-icons/hi";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant,
} from "../libraries/framer-motion-utils";
import { TitleText, TypingText } from "./ui/TypingText";

const socialLinks = [
  {
    id: 1,
    icon: <BiLogoFacebookCircle />,
    link: "https://www.facebook.com/crusaderbots",
  },
  {
    id: 2,
    icon: <BiLogoInstagramAlt />,
    link: "https://www.instagram.com/jesuit_crusaderbots/",
  },
  {
    id: 3,
    icon: <BiLogoYoutube />,
    link: "https://www.youtube.com/@2374_jesuit_robotics/",
  },
  {
    id: 4,
    icon: <HiMail />,
    link: "mailto:pwhite@jesuitmail.org",
  },
];

export default function Footer() {
  return (
    <motion.footer
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className="mt-10 p-6 pb-10 text-center"
    >
      <motion.hr
        variants={fadeIn("up", "spring", 0, 0.5)}
        className=" lg:mx-90 mx-auto my-5 w-2/3 max-w-xs rounded-md border-2 border-solid border-green-700 md:w-1/2"
      />

      <div className="mx-auto my-10 flex w-2/3 items-center justify-evenly">
        {socialLinks.map((socialLink) => (
          <motion.a
            variants={fadeIn("up", "spring", socialLink.id * 0.1, 0.1)}
            href={socialLink.link}
            target="_blank"
            className="hover-zoom text-4xl hover:text-green-800 "
            key={socialLink.id}
          >
            {socialLink.icon}
          </motion.a>
        ))}
      </div>

      <motion.h6
        variants={textVariant(0.6)}
        className=" p-2 uppercase text-gray-800 dark:text-gray-300"
      >
        Copyright &copy; 2023 Jesuit High School Robotics - All rights reserved.
      </motion.h6>
    </motion.footer>
  );
}
