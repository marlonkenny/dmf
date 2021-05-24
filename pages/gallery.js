import React, { useState } from 'react'
import { useRouter } from 'next/router'

import ReactBnbGallery from 'react-bnb-gallery'

const photos = [{
  photo: "/images/hill.jpeg",
  caption: "View from the north",
  thumbnail: "/images/hill.jpeg",
}, {
  photo: "/images/river.jpeg",
  caption: "View of the Quesnel river",
  thumbnail: "/images/river.jpeg",
}, {
  photo: "/images/DMFhouse.jpg",
  caption: "4451 Garvin Rd Farmhouse",
  thumbnail: "/images/DMFhouse.jpg",
}, {
  photo: "/images/Farmhouse-side.jpg",
  caption: "Farmhouse and garden",
  thumbnail: "/images/Farmhouse-side.jpg",
}, {
  photo: "/images/Barnyard.jpeg",
  caption: "Barnyard",
  thumbnail: "/images/Barnyard.jpeg",
}, {
  photo: "/images/Barn1.jpeg",
  caption: "Barn 1",
  thumbnail: "/images/Barn1.jpeg",
}, {
  photo: "/images/Barn2.jpeg",
  caption: "Barn 2",
  thumbnail: "/images/Barn2.jpeg",
}, {
  photo: "/images/Barn-interior.jpeg",
  caption: "Barn interior",
  thumbnail: "/images/Barn-interior.jpeg",
}, {
  photo: "/images/Chicken-house.jpg",
  caption: "Chicken house",
  thumbnail: "/images/Chicken-house.jpg",
}, {
  photo: "/images/Cooler1.jpg",
  caption: "Cooler front",
  thumbnail: "/images/Cooler1.jpg",
}, {
  photo: "/images/Cooler2.jpg",
  caption: "Cooler side",
  thumbnail: "/images/Cooler2.jpg",
}, {
  photo: "/images/greenhouse1.jpg",
  caption: "Greenhouse exterior",
  thumbnail: "/images/greenhouse1.jpg",
}, {
  photo: "/images/greenhouse2.jpg",
  caption: "Greenhouse interior",
  thumbnail: "/images/greenhouse2.jpg",
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
  photo: "/images/Kitchen.jpeg",
  caption: "4399 Garvin Rd kitchen",
  thumbnail: "/images/Kitchen.jpeg",
}, {
  photo: "/images/cabin.jpeg",
  caption: "Bunkhouse 1",
  thumbnail: "/images/cabin.jpeg",
}, {
  photo: "/images/Bunkhouse2.jpg",
  caption: "Bunkhouse 2",
  thumbnail: "/images/Bunkhouse2.jpg",
}, {
  photo: "/images/Bunkhouse3.jpg",
  caption: "Bunkhouse 3",
  thumbnail: "/images/Bunkhouse3.jpg",
}, {
  photo: "/images/garden1.jpg",
  caption: "Garden 1",
  thumbnail: "/images/garden1.jpg",
}, {
  photo: "/images/garden2.jpg",
  caption: "Garden 2",
  thumbnail: "/images/garden2.jpg",
}, {
  photo: "/images/garden3.jpeg",
  caption: "Garden 3",
  thumbnail: "/images/garden3.jpeg",
}, {
  photo: "/images/hay.jpg",
  caption: "Hay Bales",
  thumbnail: "/images/hay.jpg",
}, {
  photo: "/images/sheep.jpg",
  caption: "Sheep",
  thumbnail: "/images/sheep.jpg",
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
