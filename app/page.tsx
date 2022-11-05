import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>

      <Link href="/datatable">Datatable</Link>
      <a href="/products.csv">Download CSV</a>
      <a href="/products.json">Download JSON</a>
    </div>
  );
}
