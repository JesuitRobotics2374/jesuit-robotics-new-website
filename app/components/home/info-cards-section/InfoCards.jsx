"use client";
import {
  BsFillCalendarEventFill,
  BsFillPeopleFill,
  BsFillPersonFill,
} from "react-icons/bs";
import InfoCard from "./InfoCard";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/app/libraries/framer-motion-utils";

const cardsContent = [
  { id: 1, title: "50 Members", icon: <BsFillPersonFill /> },
  { id: 2, title: "1 Team", icon: <BsFillPeopleFill /> },
  { id: 3, title: "16 Years", icon: <BsFillCalendarEventFill /> },
];

export default function InfoCards() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.4 }}
      className="my-20 grid w-full grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3"
    >
      {cardsContent.map((card) => (
        <motion.div
          key={card.id}
          variants={fadeIn("up", "spring", card.id * 0.1, 0.5)}
        >
          <InfoCard title={card.title} icon={card.icon} />
        </motion.div>
      ))}
    </motion.div>
  );
}
