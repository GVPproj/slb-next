import photoData from "../lib/photoData"
import Gallery from "../components/Gallery"

export default async function GalleryCollection() {
  const galleriesArray = await photoData()

  return (
    <section className="w-min">
      {galleriesArray.map((g: any) => (
        <Gallery key={g.id} gallery={g} />
      ))}
    </section>
  )
}
