"use client"
// import styles from "./Gallery.module.css"
import Image from "next/image"
import Masonry from "react-masonry-css"

export default function Gallery(props: any) {
  const gallery = props.gallery
  console.log(gallery)
  return (
    <Masonry
      breakpointCols={2}
      className="flex justify-center bg-green-300 m-4 p-2 gap-2 w-max"
      columnClassName="bg-blue-300"
    >
      {gallery.node.image.map((pic: any) => (
        <Image
          key={pic.mediaItemId}
          src={pic.mediaItemUrl}
          height={pic.mediaDetails.height}
          width={400}
          alt={pic.altText}
        />
      ))}
    </Masonry>
  )
}
