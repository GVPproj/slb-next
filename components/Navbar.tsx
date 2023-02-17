import Link from "next/link"
import Dropdown from "./Dropdown.jsx"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-100/70 mb-16">
      <nav className=" max-w-5xl mx-auto w-11/12 my-3 flex justify-between items-end ">
        <Link className="text-3xl tracking-widest" href="/">
          sophia burke
        </Link>
        <div className="flex gap-6 items-end">
          <Link href="/">selected works</Link>
          <Link href="/archives">archives</Link>
          <Link href="/about">about</Link>
        </div>
        {/* <div className="md:hidden">
          <Dropdown />
        </div> */}
      </nav>
    </header>
  )
}
