/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { formatDistance } from "date-fns";
import { z } from "zod";

import { Button } from "~/components/Button";

const schema = z.object({
  timestamp: z.coerce.date(),
  resources: z.array(z.any()),
});

export const ClientProfile: React.FC = () => {
  const { user, error, isLoading } = useUser();
  const dataQuery = useQuery(["data-query"], async () => {
    const res = await fetch("/products.json");
    const data = await res.json();

    const parsed = schema.parse(data);
    return { relative: formatDistance(parsed.timestamp, new Date()), timestamp: parsed.timestamp };
  });

  const dumpMutation = useMutation(async () => {
    const res = await fetch("/api/v1/products/dump", { method: "POST" });
    if (!res.ok) {
      throw new Error(await res.json());
    }

    await dataQuery.refetch();
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (!user) {
    return (
      <div>
        <h2>You are not logged in</h2>

        <a href="/api/auth/login?returnTo=/profile">
          <Button variantColor="green">Login</Button>
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {user.picture && (
        <img className="h-32 w-32" src={user.picture} alt={user.name || "[profile picture]"} />
      )}

      <div>
        <h2 className="text-lg">{user.name || user.email}</h2>
        {user.email !== user.name && <p className="text-sm">{user.email}</p>}
      </div>

      <a href="/api/auth/logout" className="block">
        <Button variantColor="red">Logout</Button>
      </a>

      <hr className="my-4" />

      <div>
        <div className="flex items-center space-x-1">
          <h3 className="text-lg font-bold">Product dump</h3>
          <a className="underline" href="/products.json" rel="noopener noreferrer" target="_blank">
            products.json
          </a>
        </div>

        {dataQuery.isLoading && <div>Loading...</div>}
        {dataQuery.isError && (
          <div>{String((dataQuery.error as any)?.["message"] || dataQuery.error)}</div>
        )}

        {dataQuery.data && (
          <div>
            <p className="text-sm">
              Last updated {dataQuery.data.relative} ({dataQuery.data.timestamp.toLocaleString()})
            </p>
          </div>
        )}

        <Button
          className="mt-2"
          size="sm"
          onClick={() => dumpMutation.mutateAsync()}
          disabled={dataQuery.isLoading || dumpMutation.isLoading}
        >
          Dump products
        </Button>
      </div>
    </div>
  );
};
