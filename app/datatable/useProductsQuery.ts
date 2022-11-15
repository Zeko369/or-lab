import SuperJSON from "superjson";
import { SuperJSONResult } from "superjson/dist/types";
import { useQuery } from "@tanstack/react-query";

import { GetProducts } from "../../lib/getProducts";

export const useProductsQuery = (initialData: SuperJSONResult, search: string) => {
  return useQuery(
    ["products", search],
    async () => {
      const res = await fetch(`/api/products?search=${search}`);
      const data = await res.json();

      return SuperJSON.deserialize<GetProducts>(data);
    },
    { initialData: SuperJSON.deserialize<GetProducts>(initialData) }
  );
};
