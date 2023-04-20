import "./globals.css"
import { Crimson_Text } from "@next/font/google"
const crimsonText = Crimson_Text({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
})

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={crimsonText.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-stone-100 text-stone-900 flex flex-col min-h-screen">
        <Navbar />
        <main className="max-w-5xl mx-auto w-11/12 overflow-clip mt-28 mb-16 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
