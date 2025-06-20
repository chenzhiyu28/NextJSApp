import Link from "next/link";
import "./globals.css";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "RootPage",
  description: "This is the root page of the app"
}


export default function RootLayout
({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body>
        <h1>Hi from RootLayout</h1>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/team">Team</Link></li>
            <li><Link href="/team/about">Team about</Link></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
