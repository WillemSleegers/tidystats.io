import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="container d-md-flex justify-content-center mt-4">
      <div>
        <div className="d-flex flex-wrap gap-5">
          <div>
            <h5>
              <Link to="/r" className="text-decoration-none text-dark">
                R package
              </Link>
            </h5>
            <ul className="list-unstyled text-small">
              <li>
                <a
                  className="text-muted text-decoration-none"
                  href="https://cran.r-project.org/web/packages/tidystats/index.html"
                >
                  CRAN
                </a>
              </li>
              <li>
                <a
                  className="text-muted text-decoration-none"
                  href="https://willemsleegers.github.io/tidystats/"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  className="text-muted text-decoration-none"
                  href="https://github.com/WillemSleegers/tidystats"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  className="text-muted text-decoration-none"
                  href="https://github.com/WillemSleegers/tidystats/issues"
                >
                  Bug report
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5>
              <a
                className="text-decoration-none text-dark"
                href="word-add-in.html"
              >
                Word add-in
              </a>
            </h5>
            <ul className="list-unstyled text-small">
              <li>
                <a
                  className="text-muted text-decoration-none"
                  href="https://appsource.microsoft.com/en-us/product/office/WA200002476?tab=Overview"
                >
                  AppSource
                </a>
              </li>

              <li>
                <a
                  className="text-muted text-decoration-none"
                  href="https://github.com/WillemSleegers/tidystats-Word-add-in"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  className="text-muted text-decoration-none"
                  href="https://github.com/WillemSleegers/tidystats-Word-add-in/issues"
                >
                  Bug report
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5>
              <a className="text-decoration-none text-dark" href="support.html">
                Support
              </a>
            </h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link className="text-muted text-decoration-none" to="FAQ">
                  FAQ
                </Link>
              </li>
              <li>
                <a className="text-muted text-decoration-none" href="tips.html">
                  Tips & Tricks
                </a>
              </li>
              <li>
                <a
                  className="text-muted text-decoration-none"
                  href="https://twitter.com/tidystats"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="text-muted text-decoration-none"
                  href="mailto:tidystats@gmail.com"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5>
              <Link className="text-decoration-none text-dark" to="about">
                About
              </Link>
            </h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted text-decoration-none" href="me.html">
                  Me
                </a>
              </li>
              <li>
                <a
                  className="text-muted text-decoration-none"
                  href="citation.html"
                >
                  Citation
                </a>
              </li>
              <li>
                <a
                  className="text-muted text-decoration-none"
                  href="privacy.html"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-muted my-4">
          Willem Sleegers &copy; 2020
        </div>
      </div>
    </footer>
  )
}

export default Footer
