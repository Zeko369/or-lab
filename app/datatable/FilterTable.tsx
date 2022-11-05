"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import { SuperJSONResult } from "superjson/dist/types";
import { useProductsQuery } from "./useProductsQuery";

type FilterTableProps = { productsSuperJSON: SuperJSONResult };

export const FilterTable: React.FC<FilterTableProps> = (props) => {
  const { data } = useProductsQuery(props.productsSuperJSON);
  const router = useRouter();

  return (
    <>
      <button className="px-2 py-1 bg-blue-600 hover:bg-blue-700" onClick={() => router.refresh()}>
        Thingy
      </button>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>brand</th>
            <th>short_description</th>
            <th>description</th>
            <th>images</th>
            <th>price</th>
            <th>discount</th>
            <th>rating</th>
            <th>stock</th>
            <th>created_at</th>
            <th>updated_at</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <th>{product.id}</th>
              <th>{product.name}</th>
              <th>{product.brand}</th>
              <th>{product.shortDescription}</th>
              <th>{product.description}</th>
              <th>
                <div className="flex">
                  {product.images.map((image, index) => (
                    <Image
                      key={`${image}-${index}`}
                      src={image}
                      alt={`Image ${index}`}
                      width="200"
                      height="200"
                    />
                  ))}
                </div>
              </th>
              <th>{product.price}</th>
              <th>{product.discount}</th>
              <th>{product.rating}</th>
              <th>{product.stock}</th>
              <th>{product.createdAt.toLocaleDateString()}</th>
              <th>{product.updatedAt.toLocaleDateString()}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
