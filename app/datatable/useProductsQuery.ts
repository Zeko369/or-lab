import SuperJSON from "superjson";
import { useMemo } from "react";
import { SuperJSONResult } from "superjson/dist/types";
import { useQuery } from "@tanstack/react-query";

import { GetProducts } from "../../lib/getProducts";

type Args = {
  search: string;
  searchField: string | undefined;
};

export const useProductsURL = ({ search, searchField }: Args) => {
  return useMemo(() => {
    const params = new URLSearchParams();
    params.set("search", search);
    if (searchField) {
      params.set("searchField", searchField);
    }

    return `/api/products?${params.toString()}`;
  }, [search, searchField]);
};

export const useProductsQuery = (initialData: SuperJSONResult, args: Args) => {
  const url = useProductsURL(args);

  return useQuery(
    ["products", url],
    async () => {
      const res = await fetch(url);
      const data = await res.json();

      return SuperJSON.deserialize<GetProducts>(data);
    },
    { initialData: SuperJSON.deserialize<GetProducts>(initialData) }
  );
};
