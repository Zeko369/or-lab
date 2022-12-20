import { createSwaggerSpec } from "next-swagger-doc";
import { SwaggerUI } from "./SwaggerUi";
import { nextSwaggerConfig } from "~/config/next-swagger-doc";

import "swagger-ui-react/swagger-ui.css";

export default function ApiDoc() {
  const spec: Record<string, any> = createSwaggerSpec({ ...nextSwaggerConfig });
  // const spec: Record<string, any> = nextSwaggerConfig.definition;

  return <SwaggerUI spec={spec} />;
}
