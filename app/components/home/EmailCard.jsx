import Image from "next/image";

export default function EmailCard() {
  return (
    <div className="relative">
      <Image
        src="/photos/group-photo.webp"
        width={2048}
        height={1363}
        draggable={false}
        className="rounded-3xl"
        alt="Group photo of the Jesuit Robotics Club with their creation, the robot, in front of them."
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-bl from-transparent via-transparent to-slate-200/90" />
      <button className="absolute bottom-6 left-6">Email Us</button>
    </div>
  );
}
