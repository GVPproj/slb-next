"use client"
import Link from "next/link"
import Dropdown from "./Dropdown.jsx"
// import { useState } from "react"

export default function Navbar() {
  // const [show, setShow] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-50/70 mb-16">
      <nav className=" max-w-5xl mx-auto w-11/12 my-3 flex justify-between">
        <Link className="text-3xl tracking-widest self-start" href="/">
          sophia burke
        </Link>

        <div className="hidden md:flex flex-row gap-6 items-end">
          <Link href="/">selected works</Link>
          <Link href="/archives">archives</Link>
          <Link href="/about">about</Link>
        </div>
        <div className="md:hidden">
          <Dropdown />
        </div>
      </nav>
    </header>
  )
}
