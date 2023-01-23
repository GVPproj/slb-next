import "./globals.css"
import { Inconsolata } from "@next/font/google"

// If loading a variable font, you don't need to specify the font weight
const inconsolata = Inconsolata({
  subsets: ["latin"],
  // default, can also use "swap" to ensure custom font always shows
  display: "optional",
})

import Navbar from "@/components/Navbar"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inconsolata.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-slate-100 text-slate-900 flex flex-col min-h-full">
        <Navbar />
        <div className="my-auto">{children}</div>

        <footer className="bg-blue-300">FOOTER placeholder</footer>
      </body>
    </html>
  )
}
