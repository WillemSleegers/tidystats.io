import { Link } from "react-router-dom"

type NavProps = {
  logo: string
  logoName: string
}

const Navbar = ({ logo, logoName }: NavProps) => {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container">
        <img
          src={logo}
          className="me-3"
          width="50"
          height="40"
          alt="tidystats logo"
        />
        <Link to="/" className="navbar-brand nav-link">
          {logoName}{" "}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav">
            <Link to="/pricing" className="nav-link">
              Pricing
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
