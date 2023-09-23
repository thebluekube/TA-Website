"use client";
import "./globals.css";

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

import { Inter } from "next/font/google";
// import { Navbar } from "./components/navigation/Navbar";
// import { Footer } from "./components/footer/Footer";
import { Box } from "@chakra-ui/react";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  );
}
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* <Navbar /> */}
          {children}
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}