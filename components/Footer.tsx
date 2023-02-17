import Link from "next/link"

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-between w-11/12 max-w-5xl mx-auto mt-auto mb-7 ">
        <p>
        all images &copy; sophia burke, {new Date().getFullYear()}
        </p>
        <p>website by <Link href="https://grahamvanpelt.dev">grahamvanpelt.dev</Link></p>
      </div>
    </footer>
  )
}
