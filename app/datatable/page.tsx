import SuperJSON from "superjson";
import { getProducts } from "../../lib/getProducts";
import { FilterTable } from "./FilterTable";

export default async function DataTablePage() {
  const products = await getProducts({});
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold">Data table or products</h1>
      <FilterTable productsSuperJSON={SuperJSON.serialize(products)} />
    </div>
  );
}
