import SuperJSON from "superjson";
import { SuperJSONResult } from "superjson/dist/types";
import { useQuery } from "@tanstack/react-query";

import { GetProducts } from "../../lib/getProducts";

export const useProductsQuery = (initialData: SuperJSONResult) => {
  return useQuery(
    ["products"],
    async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      return SuperJSON.deserialize<GetProducts>(data);
    },
    { initialData: SuperJSON.deserialize<GetProducts>(initialData) }
  );
};
