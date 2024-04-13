import { Inter } from "next/font/google";
import "../ui/globals.css";
import Providers from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Example App",
  description: "Testing enviroment",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body suppressHydrationWarning className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
