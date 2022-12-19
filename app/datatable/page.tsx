import SuperJSON from "superjson";
import { db } from "../../prisma";
import { FilterTable } from "./FilterTable";

export default async function DataTablePage() {
  const products = await db.product.findMany();
  return <FilterTable productsSuperJSON={SuperJSON.serialize(products)} />;
}
