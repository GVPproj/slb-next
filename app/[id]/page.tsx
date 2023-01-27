import Gallery from "../../components/Gallery"

type PageProps = {
  params: {
    id: string
  }
}

const fetchGallery = async () => {
  const results = await fetch("https://slb.sitesbygvp.com/graphql", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      query: `{
  galleries(first: 100) {
    edges {
      node {
        title
        id
        ...GalleryFields
      }
    }
  }
}

fragment GalleryFields on Gallery {
  image {
    mediaItemId
    mediaItemUrl
    altText
    caption
    description
    mediaDetails {
      height
      width
      sizes {
        file
        fileSize
        height
        mimeType
        name
        sourceUrl
        width
      }
    }
  }
}`,
    }),
  })
  const libs = await results.json()
  const galleries = await libs.data.galleries.edges
  return await galleries
}

async function GalleryPage({ params: { id } }: PageProps) {
  const fetchedGalleries = await fetchGallery()

  return (
    <>
      {fetchedGalleries.map((gal: any) => {
        if (
          gal.node.id.substring(0, gal.node.id.length - 2) ===
          id.substring(0, id.length - 6)
        ) {
          console.log(gal.node.title)
          return <Gallery key={id} gallery={gal} />
        }
      })}
    </>
  )
}

export default GalleryPage
