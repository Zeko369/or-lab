import { NextApiRequest } from "next";
import { z } from "zod";

import { ApiError } from "./errors";
import { productSchema } from "~/schema.mjs";

export const idParams = z.object({
  id: z.coerce.number(),
});

export const getId = (request: NextApiRequest) => {
  const res = idParams.safeParse(request.query);
  if (res.success) {
    return res.data.id;
  }

  throw new ApiError(400, "ID Not passed or not a number");
};

export const productBody = productSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
