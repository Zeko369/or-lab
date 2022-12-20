"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { Button } from "~/components/Button";

const SwaggerUIReact = dynamic(() => import("swagger-ui-react"), { ssr: false, suspense: true });

export const SwaggerUI: React.FC<{ spec: Record<string, any> }> = ({ spec }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex gap-2">
        <Link href="/">
          <Button variantColor="gray">Home</Button>
        </Link>

        <Link href="/api/doc" target="_blank">
          <Button variantColor="orange">Open as JSON</Button>
        </Link>

        <Button onClick={router.refresh}>Refetch</Button>
      </div>

      <Suspense fallback={<h1>Loading swagger UI...</h1>}>
        <SwaggerUIReact spec={spec} />
      </Suspense>
    </>
  );
};
