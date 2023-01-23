import photoData from "../lib/photoData"
import Gallery from "../components/Gallery"

export default async function GalleryCollection() {
  const galleriesArray = await photoData()

  return (
    <section className="max-w-3xl mx-auto w-11/12 overflow-clip">
      {galleriesArray.map((g: any) => (
        <Gallery key={g.id} gallery={g} />
      ))}
    </section>
  )
}
