import { withSwagger } from "next-swagger-doc";
import nextSwaggerConfig from "../../config/next-swagger-doc.json";

const swaggerHandler = withSwagger(nextSwaggerConfig);

export default swaggerHandler();
