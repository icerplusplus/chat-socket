"use client";
import "../../../styles/globals.css";
import { SessionProvider } from "next-auth/react";

interface Props {
  children: React.ReactNode;
}

export const metadata = {
  title: "Login Page",
  description: "Generated by Next.js",
};

const NextAuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
