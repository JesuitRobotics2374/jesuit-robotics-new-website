"use client";

import { auth } from "@/app/libraries/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function UserDisplayName() {
  const [user, loading] = useAuthState(auth);
  return <>{!loading && user ? user.displayName : "Jesuit Member"}</>;
}
