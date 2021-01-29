import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './layouts/Header'
import { Container } from 'react-bootstrap'
import { Provider } from 'react-redux'
import { useStore } from './../redux/store'

function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Header />
      <Container fluid>
        <Component {...pageProps} />
      </Container>
    </Provider>
  )
}

export default App
