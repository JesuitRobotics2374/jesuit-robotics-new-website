export default function BoardSection({ title, contents }) {
  return (
    <div className="main-green-bg mx-auto h-fit w-96 rounded-3xl p-8">
      <h2 className="w-full p-0 pb-5">{title}</h2>
      <h5>{contents}</h5>
    </div>
  );
}
