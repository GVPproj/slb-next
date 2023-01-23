import "./globals.css"
import { Inconsolata, Work_Sans } from "@next/font/google"
const inconsolata = Inconsolata({
  subsets: ["latin"],
  // default, can also use "swap" to ensure custom font always shows
  display: "swap",
})
const workSans = Work_Sans({
  subsets: ["latin"],
  // default, can also use "swap" to ensure custom font always shows
  display: "swap",
})

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={workSans.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-slate-100 text-slate-900 flex flex-col min-h-full">
        <Navbar />
        <div className="my-auto">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
