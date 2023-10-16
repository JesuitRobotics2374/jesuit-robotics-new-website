import Link from "next/link";
import UserProfile from "../../components/account/UserProfile";

export default function Member() {
  return (
    <div>
      <UserProfile />

      <Link href="/member/docs">Docs</Link>
    </div>
  );
}
