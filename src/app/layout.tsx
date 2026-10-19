import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smiley's Custom Creations | Made Personal",
  description: "Custom shirts, caps, drinkware and gifts made in Texas.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
