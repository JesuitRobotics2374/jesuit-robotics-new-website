import { db } from "@/app/libraries/firebase";
import { doc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";

export default function DocsItem({ selectedDoc }) {
  const [document, documentLoading, error] = useDocument(
    doc(db, `docs/${selectedDoc}`),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    },
  );

  if (error) {
    throw new Error(error);
  }

  return (
    <>
      {!documentLoading && document && (
        <div className="flex-1 px-10">
          <h1 className="text-center">{document.data().title}</h1>
          {document.data().overview && (
            <div className="my-4">
              <h3 className="font-bold">Overview</h3>
              <h4>{document.data().overview}</h4>
            </div>
          )}
          <h4>{document.data().contents}</h4>
        </div>
      )}
    </>
  );
}
