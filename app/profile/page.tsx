import Link from "next/link";
import { ClientProfile } from "./ClientProfile";

export default function ProfilePage() {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold underline">Profile</h1>
      <Link href="/">Home</Link>

      <ClientProfile />
    </div>
  );
}
