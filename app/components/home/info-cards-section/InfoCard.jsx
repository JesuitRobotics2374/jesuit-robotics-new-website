export default function InfoCard({ title, icon }) {
  return (
    <div className="flex flex-col justify-center items-center gap-5 rounded-3xl p-8 w-56 mx-auto">
      <div className="p-9 bg-gradient-to-br from-green-400/40 to-green-600 backdrop-blur-xl rounded-full text-6xl text-white/90 ">
        {icon}
      </div>
      <h3 className="">{title}</h3>
    </div>
  );
}
