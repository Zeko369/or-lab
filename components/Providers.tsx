"use client";

import React, { PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export const ClientProviders: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </UserProvider>
  );
};
