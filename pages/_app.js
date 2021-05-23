import '../styles/globals.css'
import 'react-bnb-gallery/dist/style.css'

import { Grommet } from 'grommet';

function MyApp({ Component, pageProps }) {
  return (
    <Grommet plain>
      <Component {...pageProps} />
    </Grommet>
  )
}

export default MyApp
