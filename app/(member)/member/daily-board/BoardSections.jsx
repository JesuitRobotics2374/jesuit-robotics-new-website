"use client";

import { useCollection } from "react-firebase-hooks/firestore";
import BoardSection from "./BoardSection";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/app/libraries/firebase";
import Image from "next/image";

export default function BoardSections() {
  const [boardSections, loadingBoardSections, error] = useCollection(
    query(collection(db, "/daily-board"), orderBy("id")),
  );

  if (error) {
    throw new Error(error);
  }

  if (loadingBoardSections) return "Loading...";
  return (
    <div className="my-10 flex justify-evenly gap-20">
      <div className=" grid h-[55vh] grid-cols-1 gap-16 overflow-y-scroll rounded-3xl px-2 xl:grid-cols-2">
        {!loadingBoardSections &&
          boardSections &&
          boardSections.docs.map((board) => (
            <BoardSection
              key={board.data().id}
              title={board.data().title}
              contents={board.data().contents}
            />
          ))}
      </div>
      <Image
        src="/svg/member/board-animated.svg"
        className="h-auto w-1/2 max-w-md"
        width={500}
        height={500}
        priority
        draggable="false"
        alt=""
      />
    </div>
  );
}
