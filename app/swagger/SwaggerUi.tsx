"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Button } from "~/components/Button";

const SwaggerUIReact = dynamic(() => import("swagger-ui-react"), { ssr: false });

export const SwaggerUI: React.FC<{ spec: Record<string, any> }> = ({ spec }) => {
  const router = useRouter();

  return (
    <>
      <Button onClick={router.refresh}>Refetch</Button>
      <SwaggerUIReact spec={spec} />
    </>
  );
};
