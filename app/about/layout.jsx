import Image from "next/image"
import artistHeadshot from "../../public/Sophia_May_2016_BW.jpg"

export default function Layout({ children }) {
  return (
    <div className="flex flex-col gap-12">
      <Image
        width="768"
        className="mx-auto"
        src={artistHeadshot}
        alt="Headshot of Artis Sophia Burke in black and white"
      />
      {children}
    </div>
  )
}
