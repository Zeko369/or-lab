import { NextApiRequest, NextApiResponse } from "next";

export const options = (
  req: NextApiRequest & { method: string },
  res: NextApiResponse,
  allowedOptions = ["GET"]
) => {
  if (req.method === "OPTIONS") {
    res.setHeader("Allow", allowedOptions.join(", "));
    res.status(204).end();
    return false;
  }

  if (!allowedOptions.includes(req.method)) {
    res.setHeader("Allow", allowedOptions.join(", "));
    res.status(405).end();
    return false;
  }

  return true;
};
