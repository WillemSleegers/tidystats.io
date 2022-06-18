import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="container-md text-center mt-auto pt-5">
      <small>
        <div className="d-inline-block">
          <div className="d-flex flex-wrap gap-5 text-start">
            <div>
              <h5>
                <Link to="/r" className="text-decoration-none text-dark">
                  R package
                </Link>
              </h5>
              <ul className="list-unstyled">
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
                <Link to="/word" className="text-decoration-none text-dark">
                  Word add-in
                </Link>
              </h5>
              <ul className="list-unstyled">
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
                <Link to="/support" className="text-decoration-none text-dark">
                  Support
                </Link>
              </h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/FAQ" className="text-muted text-decoration-none">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/tips" className="text-muted text-decoration-none">
                    Tips & Tricks
                  </Link>
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
                    E-mail
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5>
                <Link to="/about" className="text-decoration-none text-dark">
                  About
                </Link>
              </h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/me" className="text-muted text-decoration-none">
                    Me
                  </Link>
                </li>
                <li>
                  <Link
                    to="/citation"
                    className="text-muted text-decoration-none"
                  >
                    Citation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-muted text-decoration-none"
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-muted my-4">
          Willem Sleegers &copy; 2022
        </div>
      </small>
    </footer>
  )
}
