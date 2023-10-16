export default function DocsNavbar({
  docsList,
  docsLoading,
  selectedDoc,
  setSelectedDoc,
}) {
  return (
    <div className="h-full w-64 overflow-x-scroll rounded-3xl p-5 text-green-800">
      {!docsLoading &&
        docsList &&
        docsList.docs.map((doc) => (
          <div
            className={` w-full cursor-pointer rounded-full p-2 px-4 ${
              selectedDoc == doc.id && "main-green-bg"
            }`}
            key={doc.id}
            onClick={() => setSelectedDoc(doc.id)}
          >
            {doc.data().title}
          </div>
        ))}
    </div>
  );
}
