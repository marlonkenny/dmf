import Link from 'next/link'
import { Box } from 'grommet'
import styles from '../styles/Nav.module.css'

export default function Nav() {
  return (
    <Box direction="row" justify="center" width="xxlarge" className={styles.nav}>
      <a href="/#Home">Home</a>
      <Link href="/gallery">Gallery</Link>
      <a href="#Map">Map</a>
      <a href="#Contact">Contact</a>
    </Box>
  )
}