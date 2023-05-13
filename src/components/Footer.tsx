const sections = [
  {
    id: "r-package",
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
        url: "/support/FAQ/",
      },
      {
        id: "support-tips",
        text: "Tips",
        url: "/support/tips/",
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
        id: "about-privacy",
        text: "Privacy",
        url: "/privacy/",
      },
    ],
  },
]

export const Footer = () => {
  return (
    <footer className="px-8 my-8 text-center sticky top-[100vh]">
      <div className="inline-block">
        <div className="flex flex-wrap gap-6 text-start">
          {sections.map((section) => {
            return (
              <div className="mx-3" key={section.id}>
                <h5>
                  <a href="{{ item.url }}" className="font-semibold text-base">
                    {section.text}
                  </a>
                </h5>
                <ul>
                  {section.items.map((item) => {
                    return (
                      <li key={item.id} className="text-sm list-none">
                        <a href={item.url}>{item.text}</a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
      <div className="text-sm text-center my-4">
        Willem Sleegers &copy; 2023
      </div>
    </footer>
  )
}
