const sections = [
  {
    id: "r-package",
    text: "R package",
    url: "/r/",
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
    url: "/microsoft/",
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
    url: "/google/",
    items: [
      {
        id: "google-docs-statistic",
        text: "Google Docs Statistic",
        url: "/google/statistic/",
      },
      {
        id: "google-docs-github",
        text: "GitHub",
        url: "https://github.com/WillemSleegers/tidystats-Google-Docs-add-in",
      },
      {
        id: "google-docs-issues",
        text: "Bug report",
        url: "https://github.com/WillemSleegers/tidystats-Google-Docs-add-in/issues",
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
        id: "support-x",
        text: "X",
        url: "https://x.com/tidystats",
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
      {
        id: "about-citation",
        text: "Citation",
        url: "/citation/",
      },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-gray-50 p-4 sm:p-6">
      <div className="flex flex-col justify-between gap-3 lg:flex-row ">
        <div className="mt-4 flex-shrink-0">
          <a href="https://tidystats.io" className="flex items-center">
            <img
              src="/assets/images/tidystats-white-bg.svg"
              className="mr-3 h-8"
              alt="tidystats Logo"
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold">
              tidystats
            </span>
          </a>
        </div>
        <div className="mt-4 flex flex-row flex-wrap gap-5 md:gap-10">
          {sections.map((section) => {
            return (
              <div key={section.id}>
                <a className="hover:underline" href={section.url}>
                  <h2 className="mb-3 font-semibold text-gray-900">
                    {section.text}
                  </h2>
                </a>
                <ul className="text-gray-600">
                  {section.items.map((item) => {
                    return (
                      <li key={item.id} className="mb-2">
                        <a href={item.url} className="hover:underline">
                          {item.text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-base text-gray-500 sm:text-center">
          <a href="https://www.tidystats.io/" className="hover:underline">
            Willem Sleegers &copy; 2023
          </a>
        </span>
      </div>
    </footer>
  );
};
