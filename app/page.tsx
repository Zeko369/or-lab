import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
      <Link href="/datatable">Datatable</Link>
      <a href="/products.csv">Download CSV</a>
      <a href="/products.json">Download JSON</a>
      <a href="/productSchema.json">Download JSON Schema</a>
      <a href="/fullProductSchema.json">Download JSON Schema (with store)</a>

      <code style={{ whiteSpace: "pre" }}>
        {`
#### PRODUCT

- "id" (Int): Product ID
- "name" (string): Name
- "brand" (string): Brand
- "short_description" (string): Short description
- "description" (string): Product description
- "images" (string[]): Array of images (URLs)
- "price" (Int): Price
- "discount" (Int): Discount in percentage
- "rating" (Float): Product rating
- "stock" (Int): Available stock
- "created_at" (DateTime): Time this entry was created
- "updated_at" (DateTime): Time this entry was last updated

#### STORE

- "store_id" (Int): Shop ID
- "store_name" (string): Shop name
- "store_description" (string): Shop description
- "store_image" (string): Cover image of the shop
- "store_address" (string): Address of the shop
- "store_owner" (string): Owner's name
- "store_phoneNumber" (string): Phone number of the owner
- "store_opens_at" (Int): Time in seconds since 00:00 till the shop opens
- "store_closes_at" (Int): Time in seconds since 00:00 till the shop closes
- "store_rating" (Float): Rating of the shop (0-5)
- "store_created_at" (DateTime): Time this entry was created
- "store_updated_at" (DateTime): Time this entry was last updated
          `}
      </code>
    </div>
  );
}
