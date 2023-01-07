import { IncomingMessage, ServerResponse } from "node:http";
import { Socket } from "node:net";

import { getSession } from "@auth0/nextjs-auth0";
import { headers } from "next/headers";

export const getServerSession = async () => {
  const req = new IncomingMessage(new Socket());
  headers().forEach((v, k) => (req.headers[k] = v));

  const res = new ServerResponse(req);
  const session = await getSession(req, res);

  return session || null;
};
