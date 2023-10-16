"use client";

import { useCollectionOnce } from "react-firebase-hooks/firestore";
import BoardSection from "./BoardSection";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/app/libraries/firebase";

export default function BoardSections() {
  const [boardSections, loadingBoardSections, error] = useCollectionOnce(
    query(collection(db, "/daily-board"), orderBy("id")),
  );

  if (error) {
    throw new Error(error);
  }

  if (loadingBoardSections) return "Loading...";
  return (
    <div className="my-16 grid grid-cols-3 gap-16">
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
  );
}
