import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Carousel, Box, Grid, Image as GrommetImage, Main } from 'grommet'

import Nav from '../components/nav'

import styles from '../styles/Home.module.css'

const GalleryImage = (props) => {
  const router = useRouter()

  return (
    <Image className={styles.galleryImage} onClick={() => router.push("/gallery")} {...props} />
  )
}

export default function Home() {
  return (
    <Main>
      <Head>
        <title>Quesnel River Farm</title>
      </Head>

      <main id="Home" className={styles.main}>
        <Nav />
        <h1 className={styles.title}>
          Quesnel River Farm
        </h1>

        <h3>For sale by owner: Small Ranch in the spectacular Quesnel River Valley - $850,000</h3>

        <hr className={styles.hardRule} />

        <Box className={styles.hero}>
          <GalleryImage priority src="/images/Sheepriver.jpg" height={330} width={1000} alt="Summer View" />
        </Box>
        
        <div className={styles.description}>
          <div className={styles.descriptionBody}>
            <p>
              463-acre south-facing ranch, 50 minutes from Quesnel on the Quesnel River. Two houses, barn, shop, walk-in cooler and numerous outbuildings. 2600 ft of riverfront on the Quesnel River. 67 acres irrigated hay land and 100 acres improved pasture—fenced and cross-fenced. 30 hp pump plus mainline and sprinkler lines. Water rights on the Quesnel River for 160 acre/ft. Good internet and cell reception.
            </p>
            <ul>
              <li>Unique and beautiful river valley with productive micro-climate</li>
              <li>Currently set-up for sheep and market vegetables but could reasonably provide for 50 cow/calf pairs</li>
              <li>Large productive mixed-aged forest, ideal for a managed woodlot; could supplement mixed farming or ranching</li>
              <li>Quiet and peaceful with very little traffic – dead-end road</li>
              <li>Lots of underused agricultural potential in this valley</li>
            </ul>
          </div>
        </div>

        <Box className={styles.hero}>
          <GalleryImage priority src="/images/DMFhouse.jpg" height={450} width={600} alt="Summer View" />
        </Box>

        <div className={styles.description}>
          <div className={styles.descriptionBody}>
            <p>This is one of a very few properties along the Quesnel river in an area where properties rarely come up for sale. The entire property has been under organic management for over 30 years. The primary value of this property is its diversity. Southern exposure and long summer days combine to produce optimum growing conditions on the river benches (typically two cuts of hay). The upland forest and pasture are perfectly suited for pasturing livestock while providing income from strategic woodlot management.</p>
            <p>A beautiful tranquil setting on the breath-taking Quesnel River within easy access to the city of Quesnel. This is the ultimate property for someone with the vision and enthusiasm to develop a productive and profitable small ranch.</p>
          </div>
        </div>

        <hr className={styles.hardRule} />

        <div className={styles.description}>
          <div className={styles.descriptionBody}>
            <h3>Structures:</h3>
            <ol>
              <li>House 1: 4451 Garvin Rd – 1632 sq ft 2 story wood-frame built in 1963. 4-bedroom, one bathroom. Stucco exterior. Solid wood and wood pellet heat. Duroid and metal roof. Large open ranch-style kitchen with large attached pantry.</li>
              <li>House 2: 4399 Garvin Rd – 950 sq ft with part basement for utilities. Straw bale construction covered in stucco outside, plaster inside. 2-bedroom, one bathroom. Wood and electric heat. Cedar shake roof</li>
              <li>Timber-frame barn with board siding, metal roof, built in 1976. 57x54 ft. Very versatile design; lots of usable space for livestock and hay storage.</li>
              <li>Wood-frame shop with board siding, metal roof, concrete floor, built in 1985. 40x39 ft - 12ft ceiling</li>
              <li>Bunkhouse 1 – log building with metal roof. Includes shower and small kitchen. 23x15 ft</li>
              <li>Bunkhouse 2 – Wood frame, metal roof, built over root cellar. 12x20 ft</li>
              <li>Bunkhouse 3 – Wood frame outbuilding on skids, with metal roof. 10x16 ft</li>
              <li>Packing shed – timber-frame with metal roof and partial siding. Concrete floor. 28x26 ft</li>
              <li>Walk-in cooler – 12x40 ft. very well built (former forestry cooler). Runs fine.</li>
              <li>Chicken house – wood frame, duroid roof</li>
              <li>50 X 20 hoop-style greenhouse</li>
              <li>2 Loafing sheds in pasture – pole buildings with metal roofs </li>
            </ol>
          </div>
        </div>

        <hr className={styles.hardRule} />

        <div className={styles.description}>
          <div className={styles.descriptionBody}>
            <h3>Irrigation:</h3>
            <ul>
              <li>Water rights for 160 acre/ft</li>
              <li>30 hp pump installed in 1990. Mainline and handlines</li>
              <li>22 - 6in mainline with hydrants</li>
              <li>18 - 5 in mainline with hydrants</li>
              <li>22 - 4 in mainline with hydrants</li>
              <li>51 - 3 in handlines with sprinklers</li>
              <li>Good capacity drilled well with submersible pump at 4451 Garvin Rd</li>
              <li>Good capacity drilled well with submersible pump at 4399 Garvin Rd</li>
              <li>Six yard hydrants located strategically throughout the farmstead</li>
            </ul>
          </div>
        </div>

        <hr className={styles.hardRule} />
        
        <div id="Map" className={styles.map}>
          <h3>Map</h3>
          <p>Property details:</p>
          <ul>
            <li>DL 9157 except Plan 22662 – 159.47 ac</li>
            <li>DL 5752 – 160 ac</li>
            <li>DL 12883 – 143.75 ac</li>
          </ul>
          <Box align="center">
            <GalleryImage priority src="/images/dmf-map.jpeg" height={583} width={800} alt="Summer View" />
          </Box>
        </div>
        <div>
          <iframe width="800" height="450" loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/view?maptype=satellite&zoom=17&center=52.858434%2C-122.240755&key=AIzaSyCM9LJzT3c0hchKZM_DX7wfGAMzXH5Brmw"></iframe>
        </div>
      </main>

      <footer className={styles.footer}>
        <div id="Contact">
          Contact Form
        </div>
      </footer>
    </Main>
  )
}
