import Image from "next/image"
import heroImage from "/public/This_Is_How_I_Know_You-4-scaled.jpg"
import Link from "next/link"

export default async function Home() {
  return (
    <>
      <section className="flex flex-col gap-4 mb-8">
        <h1 className="text-xl">Art / Design / Commercial Photography</h1>
        <h2 className="text-l">Based on Salt Spring Island, BC</h2>
        <div className="flex gap-4 ">
          <Link href="mailto:sophialibertyburke@gmail.com">
            <button className="contact-btn" type="button">
              Email
            </button>
          </Link>
          <Link href="https://www.instagram.com/burke_sophia/">
            <button className="contact-btn" type="button">
              Instagram
            </button>
          </Link>
        </div>
      </section>
      <Image
        width="1300"
        className=""
        src={heroImage}
        alt="Image of gallery installation piece"
      />
    </>
  )
}
