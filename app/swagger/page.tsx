import { createSwaggerSpec } from "next-swagger-doc";
import { SwaggerUI } from "./SwaggerUi";
import nextSwaggerDoc from "../../config/next-swagger-doc.json";

import "swagger-ui-react/swagger-ui.css";

export default function ApiDoc() {
  const spec: Record<string, any> = createSwaggerSpec({ ...nextSwaggerDoc });

  return <SwaggerUI spec={spec} />;
}
