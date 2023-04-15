const data = [
  {
    id: "test",
    text: "R package",
    url: "/r-package/",
    items: [
      {
        id: "r-package-cran",
        text: "CRAN",
        url: "https://cran.r-project.org/web/packages/tidystats/",
      },
      {
        id: "r-package-documentation",
        text: "Documentation",
        url: "https://willemsleegers.github.io/tidystats/",
      },
      {
        id: "r-package-github",
        text: "GitHub",
        url: "https://github.com/WillemSleegers/tidystats/",
      },
      {
        id: "r-package-issues",
        text: "Bug report",
        url: "https://github.com/WillemSleegers/tidystats/issues/",
      },
    ],
  },
  {
    id: "word",
    text: "Microsoft Word",
    url: "/word-add-in/",
    items: [
      {
        id: "word-appsource",
        text: "AppSource",
        url: "https://appsource.microsoft.com/en-us/product/office/WA200002476?tab=Overview",
      },
      {
        id: "word-github",
        text: "GitHub",
        url: "https://github.com/WillemSleegers/tidystats-Word-add-in",
      },
      {
        id: "word-issues",
        text: "Bug report",
        url: "https://github.com/WillemSleegers/tidystats-Word-add-in/issues",
      },
    ],
  },
  {
    id: "google-docs",
    text: "Google Docs",
    url: "/google-docs-add-in/",
    items: [
      {
        id: "google-docs-statistic",
        text: "Google Docs Statistic",
        url: "/google-docs-statistic/",
      },
      {
        id: "google-docs-github",
        text: "GitHub",
        url: "https://github.com/gasparl/tidystats-Google-Docs-add-in",
      },
      {
        id: "google-docs-issues",
        text: "Bug report",
        url: "https://github.com/gasparl/tidystats-Google-Docs-add-in/issues",
      },
    ],
  },
  {
    id: "support",
    text: "Support",
    url: "/support/",
    items: [
      {
        id: "support-faq",
        text: "FAQ",
        url: "/FAQ/",
      },
      {
        id: "support-tips",
        text: "Tips",
        url: "/tips/",
      },
      {
        id: "support-twitter",
        text: "Twitter",
        url: "https://twitter.com/tidystats",
      },
      {
        id: "support-email",
        text: "E-mail",
        url: "mailto:tidystats@gmail.com",
      },
    ],
  },
  {
    id: "about",
    text: "About",
    url: "/about/",
    items: [
      {
        id: "about-me",
        text: "Me",
        url: "/me/",
      },
      {
        id: "about-citation",
        text: "Citation",
        url: "/citation/",
      },
      {
        id: "about-privacy",
        text: "Privacy",
        url: "/privacy/",
      },
    ],
  },
]

const Footer = () => {
  return (
    <footer className="text-center mt-auto pt-4">
      <small>
        <div className="inline-block">
          <div className="flex flex-wrap gap-4 gap-md-5 text-start">
            {data.map((item) => {
              console.log(item.id)
              return (
                <div key={item.id}>
                  <h5>
                    <a
                      href="{{ item.url }}"
                      className="text-decoration-none text-dark"
                    >
                      {item.text}
                    </a>
                  </h5>
                  <ul className="list-unstyled">
                    {item.items.map((subitem) => {
                      return (
                        <li key={item.id}>
                          <a
                            className="text-muted text-decoration-none"
                            href={subitem.url}
                          >
                            {subitem.text}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
        <div className="text-center text-muted my-4">
          Willem Sleegers &copy; 2023
        </div>
      </small>
    </footer>
  )
}

export default Footer
