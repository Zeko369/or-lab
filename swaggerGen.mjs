// @ts-check

import { writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

(async () => {
  const res = await fetch("http://localhost:3000/api/doc");
  const data = await res.json();

  await writeFile(
    join(dirname(fileURLToPath(import.meta.url)), "./public/swagger.json"),
    JSON.stringify(data, null, 2)
  );
})();
