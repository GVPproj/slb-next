import "./globals.css"
import Navbar from "@/components/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="min-h-full">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-slate-50 text-slate-900 flex flex-col min-h-full">
        <Navbar />
        <div className="my-auto">{children}</div>

        <footer className="bg-blue-300">FOOTER placeholder</footer>
      </body>
    </html>
  )
}
