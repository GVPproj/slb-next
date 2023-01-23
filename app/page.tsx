// import styles from "./page.module.css"
import GalleryCollection from "../components/GalleryCollection"

export default async function Home() {
  return (
    <main className="">
      {/* @ts-expect-error Server Component */}
      {<GalleryCollection />}
    </main>
  )
}
