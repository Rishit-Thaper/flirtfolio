import type { Metadata } from "next";
import "./App.scss";
import { Providers } from "@/providers/ReactQueryProvider";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
export const metadata: Metadata = {
  title: "Flirtfolio",
  description: "OpenSource Pickup Lines Repository",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Providers>{children}</Providers>
        <Toaster position="bottom-center" reverseOrder={false} />
      </body>
    </html>
  );
}
