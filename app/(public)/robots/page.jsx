"use client";

import { db } from "@/app/libraries/firebase";
import { doc } from "firebase/firestore";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { motion } from "framer-motion";
import { textVariant2 } from "@/app/libraries/framer-motion-utils";

export default function Robots() {
  const [robotsInfo, loadingRobotsInfo, error] = useDocumentOnce(
    doc(db, "/public/robots"),
  );

  if (error) {
    throw new Error(error);
  }

  return (
    <div>
      <motion.h1
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="title"
      >
        Robots
      </motion.h1>
      <motion.div
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="flex justify-center"
      >
        <h5 className="max-w-xl text-center">
          Find our previous robots built over the years, learn about the
          competitions that our team participated in, and check the status of
          our current robot!
        </h5>
      </motion.div>

      {!loadingRobotsInfo && robotsInfo && (
        <>
          <h2>Current Robot Status</h2>
          <div className="main-green-bg mb-5 flex flex-col rounded-3xl p-10">
            <h3 className="">Info</h3>
            <h5>Robot name: {robotsInfo.data().name}</h5>
            {robotsInfo.data().description ? (
              <h5>Description: {robotsInfo.data().description}</h5>
            ) : (
              <h5>Check back for more updates...</h5>
            )}
          </div>
          <div className="main-green-bg rounded-3xl p-10">
            <h3>Steps</h3>
          </div>
        </>
      )}
    </div>
  );
}
