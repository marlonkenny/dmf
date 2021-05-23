import React, { useState } from 'react'
import { useRouter } from 'next/router'

import ReactBnbGallery from 'react-bnb-gallery'

const photos = [{
  photo: "/images/DMFhouse.jpg",
  caption: "4451 Garvin Rd Farmhouse",
  thumbnail: "/images/DMFhouse.jpg",
}, {
  photo: "/images/summer-view.jpeg",
  caption: "4399 Garvin Rd in the Summer",
  thumbnail: "/images/summer-view.jpeg",
}, {
  photo: "/images/Winter.jpeg",
  caption: "4399 Garvin Rd in the winter",
  thumbnail: "/images/Winter.jpeg",
}, {
  photo: "/images/100_0540.jpeg",
  caption: "4399 Garvin Rd interior 1",
  thumbnail: "/images/100_0540.jpeg",
}, {
  photo: "/images/100_0539.jpeg",
  caption: "4399 Garvin Rd interior 2",
  thumbnail: "/images/100_0539.jpeg",
}, {
  photo: "/images/cabin.jpeg",
  caption: "Bunkhouse 1",
  thumbnail: "/images/cabin.jpeg",
}, {
  photo: "/images/Bunkhouse2.jpg",
  caption: "Bunkhouse 2",
  thumbnail: "/images/Bunkhouse2.jpg",
}, {
  photo: "/images/dmf-map.jpeg",
  caption: "Property map",
  thumbnail: "/images/dmf-map.jpeg",
}];

export default function FirstPost() {
  const [galleryOpen, setGalleryOpen] = useState(true);
  const router = useRouter()

  return (
    <>
      <button onClick={() => setGalleryOpen(!galleryOpen)}>Open photo gallery</button>
      <ReactBnbGallery
        show={galleryOpen}
        photos={photos}
        onClose={() => router.push("/")} />
    </>
  )
}
