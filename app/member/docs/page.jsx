"use client";

import { auth, db } from "@/app/libraries/firebase";
import { collection } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

export default function Docs() {
  const [user, userLoading] = useAuthState(auth);
  const [docsList, docsLoading, error] = useCollection(collection(db, "docs"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  if (error) {
    throw new Error(error);
  }

  return (
    <div className="h-[75vh] w-full flex">
      <div className="overflow-x-scroll h-full light-green-bg p-5 rounded-3xl text-white">
        {!userLoading &&
          !docsLoading &&
          docsList &&
          docsList.docs.map((doc) => (
            <h4
              className="main-green-bg p-2 px-4 rounded-full my-4"
              key={doc.id}
            >
              {doc.data().title}
            </h4>
          ))}
      </div>
    </div>
  );
}
