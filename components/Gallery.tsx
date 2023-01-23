"use client"
import { useRef } from "react"
import Image from "next/image"
import Masonry from "react-masonry-css"
import LightGalleryComponent from "lightgallery/react"

// import styles
import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-zoom.css"
import "lightgallery/css/lg-thumbnail.css"
// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail"
import lgZoom from "lightgallery/plugins/zoom"
import { LightGallery } from "lightgallery/lightgallery"

export default function Gallery(props: any) {
  const lightboxRef = useRef<LightGallery | null>(null)

  const breakpointColumnsObj = {
    default: 2,
    768: 2,
    767: 1,
  }

  const gallery = props.gallery
  const images = gallery.node.image
  return (
    <>
      <Masonry
        key={gallery.node.id}
        breakpointCols={breakpointColumnsObj}
        className="flex gap-12 max-w-3xl"
        columnClassName=""
      >
        {images.map((pic: any, idx: number) => (
          <Image
            tabIndex={0}
            key={pic.mediaItemId}
            src={pic.mediaItemUrl}
            height={pic.mediaDetails.height}
            alt={pic.altText}
            width={pic.mediaDetails.width}
            className="mb-12   outline-offset-[-1px] cursor-pointer"
            onClick={() => {
              lightboxRef.current?.openGallery(idx)
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                lightboxRef.current?.openGallery(idx)
              }
            }}
          />
        ))}
      </Masonry>
      <LightGalleryComponent
        onInit={(ref) => {
          if (ref) {
            lightboxRef.current = ref.instance
          }
        }}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        dynamic
        dynamicEl={images.map((photo: any) => ({
          src: photo.mediaItemUrl,
          thumb: photo.mediaDetails.sizes[0].sourceUrl,
        }))}
      />
    </>
  )
}
