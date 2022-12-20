import { Prisma } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { NextApiRequest, NextApiResponse } from "next";
import { ZodError } from "zod";

export class ApiError extends Error {
  name = "ApiError";

  constructor(
    private readonly status: number,
    private readonly errorMessage: string,
    private readonly error: Error | null = null
  ) {
    super(errorMessage);
  }

  // TODO: Add HTML response for non JSON requests
  respond(_req: NextApiRequest, res: NextApiResponse) {
    const status = Math.floor(this.status / 100) === 2;
    res.status(this.status).json({ ok: status, message: this.errorMessage, response: this.error });
  }

  static badRequest(message: string, zodError?: Error) {
    return new ApiError(400, message, zodError || null);
  }

  static notFound() {
    return new ApiError(404, "Not found");
  }

  static internal(message?: string) {
    return new ApiError(500, message || "Internal server error");
  }
}

export type MyNextApiHandler<T = any> = (
  req: NextApiRequest & { method: string },
  res: NextApiResponse<T>
) => Promise<void | NextApiResponse<T>>;

export const apiWrapper = (handler: MyNextApiHandler): MyNextApiHandler => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      if (error instanceof ApiError) {
        return error.respond(req, res);
      }

      if (error instanceof ZodError) {
        return ApiError.badRequest("Invalid body", error).respond(req, res);
      }

      if (error instanceof Prisma.NotFoundError) {
        return ApiError.notFound().respond(req, res);
      }

      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === "P2025") {
          return ApiError.notFound().respond(req, res);
        }
      }

      return ApiError.internal().respond(req, res);
    }
  };
};
