// import styles from "./page.module.css"
import GalleryCollection from "../components/GalleryCollection"

export default async function Home() {
  return (
    <main className="h-full bg-amber-300">
      {/* @ts-expect-error Server Component */}
      {<GalleryCollection />}
    </main>
  )
}
