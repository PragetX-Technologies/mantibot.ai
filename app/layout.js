import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

export const metadata = {
  title: "Mantibot AI",
  description: "mantibot ai website join waitlist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
