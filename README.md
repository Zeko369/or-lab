# OR-lab-2

## Skup podataka: Trgovina s proizvodima

### Version 2.0

### Autor: Fran Zekan

### Jezik: engleski

### Licenca:

MIT (auto-generirana kroz Github-ov `gh` CLI alat)

### Artifacts

- [`public/products.json`](https://github.com/Zeko369/or-lab/blob/main/public/products.json) JSON katalog proizvoda
- [`public/products.csv`](https://github.com/Zeko369/or-lab/blob/main/public/products.csv) CSV katalog proizvoda

### Attributes:

#### PRODUCT

- `id` (Int): Product ID
- `name` (string): Name
- `brand` (string): Brand
- `short_description` (string): Short description
- `description` (string): Product description
- `images` (string[]): Array of images (URLs)
- `price` (Int): Price
- `discount` (Int): Discount in percentage
- `rating` (Float): Product rating
- `stock` (Int): Available stock
- `created_at` (DateTime): Time this entry was created
- `updated_at` (DateTime): Time this entry was last updated

#### STORE

- `store_id` (Int): Shop ID
- `store_name` (string): Shop name
- `store_description` (string): Shop description
- `store_image` (string): Cover image of the shop
- `store_address` (string): Address of the shop
- `store_owner` (string): Owner's name
- `store_phoneNumber` (string): Phone number of the owner
- `store_opens_at` (Int): Time in seconds since 00:00 till the shop opens
- `store_closes_at` (Int): Time in seconds since 00:00 till the shop closes
- `store_rating` (Float): Rating of the shop (0-5)
- `store_created_at` (DateTime): Time this entry was created
- `store_updated_at` (DateTime): Time this entry was last updated

### Tech

- NextJS + TailwindCSS + TanStack Query
- @sinclair/typebox for JSON Schema generation
