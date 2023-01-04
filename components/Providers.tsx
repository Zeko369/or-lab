"use client";

import React, { PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Session } from "@auth0/nextjs-auth0";

type Props = PropsWithChildren<{ user: Session | null }>;

export const ClientProviders: React.FC<Props> = ({ children, user }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <UserProvider user={user?.user}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </UserProvider>
  );
};
