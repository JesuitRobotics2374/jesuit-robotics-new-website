export default function InfoCard({ title, icon }) {
  return (
    <div className="mx-auto flex w-64 flex-col items-center justify-center gap-5 rounded-3xl p-8 text-center">
      <div className="rounded-full bg-gradient-to-br from-green-400/40 to-green-600 p-9 text-6xl text-white/90 backdrop-blur-xl ">
        {icon}
      </div>
      <h3 className="">{title}</h3>
    </div>
  );
}
