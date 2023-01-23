import Gallery from "../components/Gallery"
import photoData from "../lib/photoData"

export default async function Home() {
  const galleriesArray = await photoData()

  return (
    <main className="max-w-3xl mx-auto w-11/12 overflow-clip mb-16">
      {<Gallery key={galleriesArray[0].node.id} gallery={galleriesArray[0]} />}
    </main>
  )
}
