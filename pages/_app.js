import '../styles/globals.css'

//wraps all of our page components, regardless of which route we're on.
function MyApp({ Component, pageProps }) {
  return (
    <>
      {
        // can have navbar here if we want it on each page
      }
      <main className="container">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
