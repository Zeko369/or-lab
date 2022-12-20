import { ApiError, apiWrapper } from "~/lib/errors";

const handler = apiWrapper(async (req, res) => {
  if (req.method === "GET" && req.url === "/api/v1") {
    return res.status(200).json({ message: "Hello World" });
  }

  ApiError.notFound().respond(req, res);
});
export default handler;
