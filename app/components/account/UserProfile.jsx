"use client";
import UserDisplayName from "./UserDisplayName";
import UserPhoto from "./UserPhoto";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/libraries/firebase";
import UserLoading from "./UserLoading";

export default function UserProfile({ showPhoto, showName }) {
  const [user, loading] = useAuthState(auth);

  if (loading) return <UserLoading />;
  return (
    <
      // className={
      //   showName &&
      //   showPhoto &&
      //   "flex justify-center items-center flex-col text-center"
      // }
    >
      {showPhoto && <UserPhoto user={user} />}
      {showName && <UserDisplayName user={user} />}
    </>
  );
}
