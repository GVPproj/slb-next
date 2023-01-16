import Image from "next/image"
import "./globals.css"
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <p className="text-cyan-400">Hello MAIN</p>
    </main>
  )
}
