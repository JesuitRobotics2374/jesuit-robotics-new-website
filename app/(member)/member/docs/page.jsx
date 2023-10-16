"use client";

import { auth, db } from "@/app/libraries/firebase";
import { collection } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionOnce } from "react-firebase-hooks/firestore";
import DocsNavbar from "./DocsNavbar";
import { useState } from "react";
import DocsItem from "./DocsItem";

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
    </div>
  );
}
