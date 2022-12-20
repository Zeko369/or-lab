"use client";
import { useUser } from "@auth0/nextjs-auth0/client";

export const ClientProfile: React.FC = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (!user) {
    return (
      <div>
        <h2>You are not logged in</h2>
      </div>
    );
  }

  return (
    <div>
      {user.picture && <img src={user.picture} alt={user.name || "[profile picture]"} />}

      <h2>{user.name}</h2>
      <p>{user.email}</p>

      <a href="/api/auth/logout">Logout</a>
    </div>
  );
};
