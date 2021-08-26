import '../styles/globals.css'
import Header from '../components/Header.js'

//wraps all of our page components, regardless of which route we're on.
function MyApp({ Component, pageProps }) {
  return (
    <>
      {
        // can have navbar here if we want it on each page
      }
      <Header />
      <main className="container">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
