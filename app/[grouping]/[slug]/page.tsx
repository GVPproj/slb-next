import Gallery from "../../../components/Gallery"

type PageProps = {
  params: {
    slug: string
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
        id
        title
        slug
        groupings {
          edges {
            node {
              id
              name
            }
          }
        }
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

async function GalleryPage({ params: { slug } }: PageProps) {
  const fetchedGalleries = await fetchGallery()

  return (
    <>
      {fetchedGalleries.map((gal: any) => {
        if (gal.node.slug === slug) {
          console.log(gal.node.title)
          return <Gallery key={gal.node.id} gallery={gal} />
        }
      })}
    </>
  )
}

export default GalleryPage
