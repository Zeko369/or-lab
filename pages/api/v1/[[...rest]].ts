import { NextApiHandler } from "next";
import { ApiError } from "../../../lib/errors";

const handler: NextApiHandler = async (req, res) => ApiError.notFound().respond(req, res);
export default handler;
