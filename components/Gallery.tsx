import Image from "next/image"

export default function Gallery(props: any) {
  const gallery = props.gallery
  return gallery.node.image.map((pic: any) => (
    <Image
      key={pic.mediaItemId}
      src={pic.mediaItemUrl}
      height={200}
      width={100}
      alt={pic.altText}
    />
  ))
}
