import { ClientProviders } from "~/components/Providers";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="p-2">
          <ClientProviders>{children}</ClientProviders>
        </div>
      </body>
    </html>
  );
}
