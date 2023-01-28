import Link from "next/link"

type PageProps = {
  params: {
    grouping: string
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
              slug
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

async function GroupingPage({ params: { grouping } }: PageProps) {
  const fetchedGalleries = await fetchGallery()

  return (
    <>
      {fetchedGalleries.map((gal: any) => {
        if (gal.node.groupings.edges[0].node.slug === grouping) {
          return (
            <Link key={gal.node.id} href={grouping + "/" + gal.node.slug}>
              {gal.node.title}
            </Link>
          )
        }
      })}
    </>
  )
}

export default GroupingPage
