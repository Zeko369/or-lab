import { ClientProviders } from "~/components/Providers";
import { getServerSession } from "~/lib/auth";

import "./globals.css";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = await getServerSession();

  return (
    <html lang="en">
      <head />
      <body>
        <div className="p-2">
          <ClientProviders user={user}>{children}</ClientProviders>
        </div>
      </body>
    </html>
  );
}
