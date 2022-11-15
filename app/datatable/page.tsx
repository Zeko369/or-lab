import SuperJSON from "superjson";
import { getProducts } from "../../lib/getProducts";
import { FilterTable } from "./FilterTable";

export default async function DataTablePage() {
  const products = await getProducts({});
  return <FilterTable productsSuperJSON={SuperJSON.serialize(products)} />;
}
