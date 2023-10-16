"use client";

import Loading from "@/app/components/ui/Loading";
import { auth } from "@/app/libraries/firebase";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Greeting() {
  const [user, userLoading] = useAuthState(auth);
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    var timeOfDay =
      new Date().getHours() < 12 ? "Good Morning" : "Good Afternoon";
    var userName = !userLoading && user ? ", " + user.displayName : "";
    setGreeting(timeOfDay + userName);
  }, [user, userLoading]);

  if (userLoading) return <Loading sizes="w-96 h-12" center />;

  return <h1 className="tracking-wide">{greeting}</h1>;
}
