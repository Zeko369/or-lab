"use client";
import React, { useState } from "react";
import Image from "next/image";
import { SuperJSONResult } from "superjson/dist/types";

import { useProductsQuery, useProductsURL } from "./useProductsQuery";
import { Input, InputFallback } from "../../components/Input";
import { Select } from "../../components/Select";
import { Button, useButtonClx } from "../../components/Button";

const SEARCH_FIELDS = [
  { label: "Name", value: "name" },
  { label: "Description", value: "description" },
  { label: "Brand", value: "brand" },
];

type FilterTableProps = { productsSuperJSON: SuperJSONResult };
export const FilterTable: React.FC<FilterTableProps> = (props) => {
  const [search, setSearch] = useState("");
  const [searchField, setSearchField] = useState<typeof SEARCH_FIELDS[number]>();

  const args = { search, searchField: searchField?.value };
  const url = useProductsURL(args);
  const { data } = useProductsQuery(props.productsSuperJSON, args);

  const buttonClx = useButtonClx({});

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row items-end justify-between gap-2">
        <Input label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />

        <Select
          label="Search Field"
          options={SEARCH_FIELDS}
          selected={searchField}
          setSelected={setSearchField}
        />
        {searchField && <Button onClick={() => setSearchField(undefined)}>Clear</Button>}
      </div>

      {search.length > 0 && (
        <div className="flex gap-2">
          <a target="_blank" rel="noreferrer" href={`${url}&format=csv`} className={buttonClx}>
            Download CSV
          </a>
          <a target="_blank" rel="noreferrer" href={`${url}&format=json`} className={buttonClx}>
            Download JSON
          </a>
        </div>
      )}

      {data.length === 0 && <h2>No data...</h2>}
      {data.length > 0 && (
        <table>
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">id</th>
              <th className="p-2">name</th>
              <th className="p-2">brand</th>
              <th className="p-2">short_description</th>
              <th className="p-2">description</th>
              <th className="p-2">image</th>
              <th className="p-2">price</th>
              <th className="p-2">rating</th>
              <th className="p-2">stock</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => (
              <tr key={product.id} className="border-b">
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
                <td>{product.rating}</td>
                <td>{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
