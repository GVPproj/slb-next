import Gallery from "../components/Gallery"
import photoData from "../lib/photoData"

export default async function Home() {
  const galleriesArray = await photoData()

  return <Gallery key={galleriesArray[0].node.id} gallery={galleriesArray[0]} />
}
