import { NextApiRequest } from "next";
import { ApiError } from "./errors";
import { idParams } from "~/schema.mjs";

export const getId = (request: NextApiRequest) => {
  const res = idParams.safeParse(request.query);
  if (res.success) {
    return res.data.id;
  }

  throw new ApiError(400, "ID Not passed or not a number");
};
