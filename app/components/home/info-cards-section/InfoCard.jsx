export default function InfoCard({ title, icon }) {
  return (
    <div className="flex flex-col justify-center items-center gap-5 rounded-3xl bg-gradient-to-br from-green-500/70 to-green-600/80 backdrop-blur-2xl p-8">
      <div className="p-7 bg-gradient-to-br from-transparent to-green-600 backdrop-blur-xl rounded-full">
        <span className="text-7xl text-white/90 backdrop-blur-xl">{icon}</span>
      </div>
      <h3 className="text-white">{title}</h3>
    </div>
  );
}
