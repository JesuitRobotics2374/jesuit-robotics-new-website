import UserDisplayName from "./UserDisplayName";
import UserPhoto from "./UserPhoto";

export default function UserProfile() {
  return (
    <div className="mx-auto flex flex-col items-center">
      <UserPhoto size="20" />
      <h2 className="p-0">
        Hi, <UserDisplayName />
      </h2>
    </div>
  );
}
