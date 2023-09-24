export default function UserDisplayName({ user }) {
  return <span>{user.displayName ? user.displayName : "Jesuit Member"}</span>;
}
