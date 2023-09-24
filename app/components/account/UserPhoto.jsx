import * as Avatar from "@radix-ui/react-avatar";

export default function UserPhoto({ user }) {
  return (
    <Avatar.Root className="bg-gradient-to-br from-green-600/40 to-green-700/60 backdrop-blur-2xl inline-flex h-20 w-20 select-none items-center justify-center overflow-hidden rounded-full align-middle outline outline-offset-4 outline-4 outline-green-700 m-4">
      <Avatar.Image
        className="rounded-full select-none h-full w-full object-cover"
        src={user.photoURL}
        alt={user.displayName}
        draggable="false"
        referrerPolicy="no-referrer"
      />
      <Avatar.Fallback
        className="text-green-800 flex h-full w-full items-center justify-center text-3xl font-medium duration-200"
        delayMs={100}
      >
        {user.displayName.match(/\b(\w)/g).join("")}
      </Avatar.Fallback>
    </Avatar.Root>

    // Using Next Image
    // <Image
    //   src={user.photoURL ? user.photoURL : "/cuboost-image.png"}
    //   className="rounded-full select-none bg-gradient-to-br from-cyan-600/40 to-cyan-700/60 backdrop-blur-2xl outline outline-offset-4 outline-4 outline-green-700"
    //   alt="Avatar"
    //   referrerPolicy="no-referrer"
    //   width={80}
    //   height={800}
    //   draggable="false"
    // />
  );
}
