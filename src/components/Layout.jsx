import Navbar from "./Navbar"
import Cursor from "./cursor"
import Footer from "./Footer"

function Layout({ children }) {

  return (
    <>
      <Cursor />
      <Navbar />

      <main>
        {children}
      </main>

      <Footer />
    </>
  )
}

export default Layout