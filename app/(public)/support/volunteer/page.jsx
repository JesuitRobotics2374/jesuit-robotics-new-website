"use client";

import { db } from "@/app/libraries/firebase";
import { collection, orderBy, query } from "firebase/firestore";
import { useCollectionOnce } from "react-firebase-hooks/firestore";

export default function Volunteer() {
  const [eventList, loadingEventList, error] = useCollectionOnce(
    query(collection(db, "/public/support/volunteer-list"), orderBy("id")),
  );

  if (error) {
    throw new Error(error);
  }

  if (loadingEventList) return "Loading...";
  return (
    <div>
      <h1 className="title">Volunteer</h1>
      <div className="flex">
        {!loadingEventList &&
          eventList &&
          eventList.docs.map((event) => (
            <div
              key={event.data().id}
              className="light-green-bg m-10 flex w-96 flex-col gap-2 rounded-3xl p-8 text-center"
            >
              <h3 className="pb-2">{event.data().title}</h3>
              <p className="text-xl font-medium">{event.data().date}</p>
              <p className="text-xl">{event.data().description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
