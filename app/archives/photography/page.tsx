import Link from "next/link"
export const revalidate = 60

const fetchGroupings = async () => {
  const results = await fetch("https://slb.sitesbygvp.com/graphql", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      query: `{
  groupings {
    nodes {
      name
      slug
      ancestors {
        nodes {
          name
          slug
        }
      }
      
    }
  }
}
`,
    }),
  })
  const res = await results.json()
  const groupings = await res.data.groupings.nodes
  return await groupings
}

async function Photography() {
  const groupings = await fetchGroupings()
  const photoGroupings = await groupings.filter(
    (grouping: any) => grouping.ancestors
  )
  console.log(photoGroupings)
  return (
    <section className="flex flex-col gap-4 items-start">
      {photoGroupings.map((grouping: any) => {
        return (
          <Link
            href={"/archives/photography/" + grouping.slug}
            key={grouping.id}
          >
            {grouping.name}
          </Link>
        )
      })}
    </section>
  )
}

export default Photography
