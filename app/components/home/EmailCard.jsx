import Image from "next/image";

export default function EmailCard() {
  return (
    <div>
      <Image src="/photos/group-photo" alt="Group Photo" />
      <button>Email Us</button>
    </div>
  );
}
