import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './layouts/Header'
import { Container } from 'react-bootstrap'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Container fluid>
        <Component {...pageProps} />
      </Container>
    </>
  )
}

export default MyApp
