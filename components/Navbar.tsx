"use client"
import Link from "next/link"
import Dropdown from "./Dropdown.jsx"
// import { useState } from "react"

export default function Navbar() {
  // const [show, setShow] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-screen backdrop-blur-md bg-stone-100/70 mb-16">
      <nav className=" max-w-5xl mx-auto w-11/12 my-3 flex justify-between">
        <Link
          className="text-3xl lg:-ml-2 outline-none outline-dashed focus:outline-slate-200 "
          href="/"
        >
          sophia burke
        </Link>

        <div className="hidden md:flex flex-row gap-6 items-end">
          <Link className="text-lg" href="/archives">
            archives
          </Link>
          <Link className="text-lg" href="/about">
            about
          </Link>
        </div>
        <div className="md:hidden">
          <Dropdown />
        </div>
      </nav>
    </header>
  )
}
