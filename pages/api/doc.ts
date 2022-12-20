import { withSwagger } from "next-swagger-doc";
import { nextSwaggerConfig } from "~/config/next-swagger-doc";
import { apiWrapper } from "~/lib/errors";

const swaggerHandler = apiWrapper(async (req, res) => {
  return withSwagger(nextSwaggerConfig)()(req, res);
});

export default swaggerHandler;
