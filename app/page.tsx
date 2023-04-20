import Image from "next/image"
import heroImage from "/public/This_Is_How_I_Know_You-4-scaled.jpg"
import Link from "next/link"
import { CiInstagram, CiMail } from "react-icons/ci"

export default async function Home() {
  return (
    <>
      <section className="flex flex-col gap-4 mb-8">
        <h1 className="text-xl">Art / Design / Commercial Photography</h1>
        <h2 className="text-l">Based on Salt Spring Island, BC</h2>
        <div className="flex gap-2">
          <CiMail size={20} />
          <Link href="mailto:sophialibertyburke@gmail.com">Email Me</Link>
        </div>
        {/* <div className="flex gap-2">
          <CiInstagram size={20} />
          <Link href="https://instagram.com/burke_sophia">Instagram</Link>
        </div> */}
      </section>
      <Image
        width="1300"
        className="mb-8"
        src={heroImage}
        alt="Image of gallery installation piece"
      />
    </>
  )
}
