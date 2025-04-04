import localFont from "next/font/local";
import "./globals.css";
import StatemanagementProvider from "../../Context/StatemanagemenetProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {

  manifest: "/manifest.json",
  title: "New-Generation-salon",
  description: "Styling your hair is our style",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StatemanagementProvider>{children}</StatemanagementProvider>
      </body>
    </html>
  );
}
