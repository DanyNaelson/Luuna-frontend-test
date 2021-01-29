import Head from 'next/head'
import { Jumbotron } from 'react-bootstrap'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Luuna</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Jumbotron className="text-center">
        <h1>Bienvenido!</h1>
        <p>
          Ya puedes buscar usuarios y repositorios públicos de Github.
        </p>
      </Jumbotron>
    </>
  )
}
