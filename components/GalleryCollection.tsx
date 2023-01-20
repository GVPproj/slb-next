import photoData from "../lib/photoData"
import Gallery from "../components/Gallery"

export default async function GalleryCollection() {
  const galleriesArray = await photoData()

  return (
    <section className="h-full">
      {galleriesArray.map((g: any) => (
        <Gallery key={g.id} gallery={g} />
      ))}
      <p>Hello :) MAIN</p>
    </section>
  )
}
