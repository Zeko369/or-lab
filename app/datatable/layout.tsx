export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold">Data table of products</h1>
      {children}
    </div>
  );
}
