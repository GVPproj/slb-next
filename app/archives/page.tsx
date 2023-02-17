import Link from "next/link"
export const revalidate = 60

const fetchGroupings = async () => {
  const results = await fetch("https://slb.sitesbygvp.com/graphql", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      query: `query groupings {
        groupings {
          nodes {
            slug
            id
            name
          }
        }
      }`,
    }),
  })
  const res = await results.json()
  const groupings = await res.data.groupings.nodes

  return await groupings
}

async function Archives() {
  const groupings = await fetchGroupings()
  const sortedGroupings = await groupings.sort((a: any, b: any) => a.name.localeCompare(b.name))
  return <section className="flex flex-col gap-4 items-start">
  {sortedGroupings.map((grouping: any)=>{
    return <Link href={"archives/" + grouping.slug} key={grouping.id}>{grouping.name}</Link>
  })}
  </section> 
}

export default Archives
