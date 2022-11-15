import { ReactQueryWrapper } from "../components/ReactQueryWrapper";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="p-2">
          <ReactQueryWrapper>{children}</ReactQueryWrapper>
        </div>
      </body>
    </html>
  );
}
