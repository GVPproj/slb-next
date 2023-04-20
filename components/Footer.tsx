import Link from "next/link"

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col sm:flex-row justify-between w-11/12 max-w-5xl mx-auto mt-auto mb-7 ">
        <p>images &copy; sophia burke, {new Date().getFullYear()}</p>
        <p>
          website:{" "}
          <Link href="https://grahamvanpelt.dev">grahamvanpelt.dev</Link>
        </p>
      </div>
    </footer>
  )
}
