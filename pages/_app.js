import '../styles/bootstrap.min.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
