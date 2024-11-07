/* eslint-disable import/order */
import "@/src/styles/globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/src/components/navbar";
import { Metadata } from "next";
import Provider from "./lib/Provider";

export const metadata: Metadata = {
  title: "Apollo Cars Services",
  description: "Apollo Cars Services",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              <Provider>
                {children}
              </Provider>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
