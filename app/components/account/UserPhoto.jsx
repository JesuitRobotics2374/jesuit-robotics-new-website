"use client";

import { auth } from "@/app/libraries/firebase";
import * as Avatar from "@radix-ui/react-avatar";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../ui/Loading";

export default function UserPhoto({ size }) {
  const [user, loading] = useAuthState(auth);

  return (
    <>
      {loading && (
        <span className="m-4 overflow-hidden rounded-full align-middle outline outline-4 outline-offset-4 outline-green-700/50">
          <Loading sizes={`h-${size} w-${size}`} circle />
        </span>
      )}
      {!loading && user && (
        <Avatar.Root
          className={`m-4 inline-flex h-${size} w-${size} dark-green-bg select-none items-center justify-center overflow-hidden rounded-full bg-gradient-to-br align-middle outline outline-4 outline-offset-4 outline-green-700 backdrop-blur-2xl dark:outline-green-100`}
        >
          {!loading && user && (
            <>
              {/* <Avatar.Image
                className="h-full w-full select-none rounded-full object-cover"
                src={user.photoURL}
                alt={user.displayName}
                draggable="false"
                referrerPolicy="no-referrer"
              /> */}
              <Avatar.Fallback
                className={`flex h-full w-full items-center justify-center ${
                  size > "15" ? "text-3xl" : "text-xl"
                } font-medium text-green-100 duration-200`}
                delayMs={100}
              >
                {user.displayName.match(/\b(\w)/g).join("")}
              </Avatar.Fallback>
            </>
          )}
        </Avatar.Root>
      )}
    </>
  );
}
