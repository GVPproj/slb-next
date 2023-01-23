// import styles from "./page.module.css"
import GalleryCollection from "../components/GalleryCollection"

export default async function Home() {
  return (
    <main>
      {/* @ts-expect-error Server Component */}
      {<GalleryCollection />}
    </main>
  )
}
