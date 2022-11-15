"use client";
import React, { useState } from "react";
import Image from "next/image";
import { SuperJSONResult } from "superjson/dist/types";

import { useProductsQuery } from "./useProductsQuery";
import { Button } from "../../components/Button";
import { Dialog } from "@headlessui/react";
import { Input } from "../../components/Input";

type FilterTableProps = { productsSuperJSON: SuperJSONResult };

export const FilterTable: React.FC<FilterTableProps> = (props) => {
  const [search, setSearch] = useState("");
  const { data } = useProductsQuery(props.productsSuperJSON, search);

  return (
    <>
      <Input label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />

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
            {/* <th>created_at</th> */}
            {/* <th>updated_at</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.brand}</td>
              <td>{product.shortDescription}</td>
              <td>{product.description}</td>
              <td>
                <div className="flex gap-2">
                  {product.images.slice(0, 1).map((image, index) => (
                    <Image
                      key={`${image}-${index}`}
                      src={image}
                      alt={`Image ${index}`}
                      width="40"
                      height="40"
                    />
                  ))}
                </div>
              </td>
              <td>{product.price}</td>
              <td>{product.discount}</td>
              <td>{product.rating}</td>
              <td>{product.stock}</td>
              {/* <td>{product.createdAt.toLocaleDateString()}</td> */}
              {/* <td>{product.updatedAt.toLocaleDateString()}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
