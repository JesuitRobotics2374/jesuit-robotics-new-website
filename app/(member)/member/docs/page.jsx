"use client";

import { auth, db } from "@/app/libraries/firebase";
import { collection } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionOnce } from "react-firebase-hooks/firestore";
import DocsNavbar from "./DocsNavbar";
import { useState } from "react";
import DocsItem from "./DocsItem";
import { BsPlusCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function Docs() {
  const [user, userLoading] = useAuthState(auth);
  const [selectedDoc, setSelectedDoc] = useState("SRI4Q4ScDCSnEiROZIEl");
  const [docsList, docsLoading, error] = useCollectionOnce(
    collection(db, "docs"),
  );

  if (error) {
    throw new Error(error);
  }

  return (
    <div className="flex h-full w-full">
      <DocsNavbar
        docsList={docsList}
        docsLoading={docsLoading}
        selectedDoc={selectedDoc}
        setSelectedDoc={setSelectedDoc}
      />
      <DocsItem selectedDoc={selectedDoc} />

      <Link href="/member/docs/new">
        <BsPlusCircleFill className="hover-zoom absolute bottom-10 right-10 text-6xl text-green-900" />
      </Link>
    </div>
  );
}
