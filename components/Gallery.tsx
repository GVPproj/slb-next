"use client"
import Image from "next/image"
import Masonry from "react-masonry-css"

export default function Gallery(props: any) {
  const breakpointColumnsObj = {
    default: 2,
    768: 2,
    767: 1,
  }

  const gallery = props.gallery
  console.log(gallery)

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex relative gap-4 max-w-3xl"
      columnClassName=""
    >
      {gallery.node.image.map((pic: any) => (
        <Image
          key={pic.mediaItemId}
          src={pic.mediaItemUrl}
          height={pic.mediaDetails.height}
          alt={pic.altText}
          width={pic.mediaDetails.width}
          className="mb-4"
        />
      ))}
    </Masonry>
  )
}
