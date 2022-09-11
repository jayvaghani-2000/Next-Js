import NavBar from '../Components/Navbar/NavBar'
import Head from 'next/head' 

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name='keywords' content='next js tutorial' />
        <meta name='author' content='Jay popatbhai vaghani' />
      </Head>
      <NavBar />
    </>
  )
}
