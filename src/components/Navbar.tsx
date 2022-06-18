import { Link } from "react-router-dom"

import LogoTidystats from "../components/LogoTidystats"

type NavProps = {
  logoName: string
  links: { [page: string]: string }
}

export default function Navbar({ logoName, links }: NavProps) {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container">
        <LogoTidystats width="50" height="40" />
        <Link to="/" className="navbar-brand nav-link">
          {logoName}{" "}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav d-flex flex-row flex-wrap gap-2 py-2 justify-content-center">
            <>
              {Object.keys(links).map((key, index) => {
                return (
                  <Link
                    key={index}
                    to={"/" + key}
                    className="nav-link mx-1 py-0"
                  >
                    {links[key]}
                  </Link>
                )
              })}
            </>
          </ul>
        </div>
      </div>
    </nav>
  )
}
