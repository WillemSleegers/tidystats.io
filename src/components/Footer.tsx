const Footer = () => {
  return (
    <footer className="my-3">
      <div className="container d-md-flex justify-content-center mt-5">
        <div className="mx-5">
          <h5>
            <a className="text-decoration-none" href="r-package.html">
              R package
            </a>
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
        <div className="mx-5">
          <h5>
            <a className="text-decoration-none" href="word-add-in.html">
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
        <div className="mx-5">
          <h5>
            <a className="text-decoration-none" href="support.html">
              Support
            </a>
          </h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="text-muted text-decoration-none" href="FAQ.html">
                FAQ
              </a>
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
        <div className="mx-5">
          <h5>
            <a className="text-decoration-none" href="about.html">
              About
            </a>
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
      <div className="text-center">Willem Sleegers &copy; 2020</div>
    </footer>
  )
}

export default Footer
