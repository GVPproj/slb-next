import Link from "next/link"

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
  return <section className="flex flex-col">
  {groupings.map((grouping: any)=>{
    return <Link href={"archives/" + grouping.slug} key={grouping.id}>{grouping.slug}</Link>
  })}
  </section> 
}

export default Archives
