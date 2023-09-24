import Link from "next/link";
import UserProfile from "../components/account/UserProfile";

export default function Member() {
  return (
    <div>
      <div className="flex flex-col mx-auto gap-2 items-center">
        <UserProfile showPhoto />
        <h2 className="p-0">Hi, {<UserProfile showName />}!</h2>
      </div>

      <Link href="/member/docs">Docs</Link>
    </div>
  );
}
