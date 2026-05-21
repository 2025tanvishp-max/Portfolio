import { Link } from "react-router-dom"

import "../styles/navbar.css"

function Navbar() {

  return (

    <nav className="navbar">

      <Link to="/" className="nav-logo">
        TANVISH
      </Link>

      <div className="nav-links">

        <Link to="/work">
          WORK
        </Link>

        <Link to="/about">
          ABOUT
        </Link>

        <Link to="/contact">
          CONTACT
        </Link>

        <Link to="/projects">
          PROJECTS
        </Link>

      </div>

    </nav>

  )
}

export default Navbar