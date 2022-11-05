import { ReactQueryWrapper } from "../components/ReactQueryWrapper";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ReactQueryWrapper>
          <h1>Hello</h1>
          {children}
        </ReactQueryWrapper>
      </body>
    </html>
  );
}
