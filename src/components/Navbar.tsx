"use client";

import { useState } from "react";

const items = [
  {
    id: "about",
    title: "About",
    href: "/about/",
  },
  {
    id: "r-package",
    title: "R Package",
    href: "/r/",
  },
  {
    id: "word",
    title: "Microsoft Word",
    href: "/microsoft/",
  },
  {
    id: "google-docs",
    title: "Google Docs",
    href: "/google/",
  },
  {
    id: "support",
    title: "Support",
    href: "/support/",
  },
];

export const Navbar = () => {
  const [hidden, setHidden] = useState(true);

  const handleClick = () => {
    setHidden(!hidden);
  };

  return (
    <nav className="border-gray-200 bg-white">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-3">
        <a href="/" className="flex items-center rounded px-3 py-1">
          <img
            src="/assets/images/tidystats-white-bg.svg"
            style={{ width: "32px", height: "32px" }}
            className="mr-3"
            alt="tidystats Logo"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold ">
            tidystats
          </span>
        </a>
        <button
          onClick={handleClick}
          data-collapse-toggle="navbar-default"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${hidden ? "hidden" : ""}`}
          id="navbar-default"
        >
          <div className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-2 md:border-0 md:bg-white md:p-0">
            {items.map((item) => {
              return (
                <span key={item.id} className="px-2 py-2 font-normal">
                  <a href={item.href} aria-current="page">
                    {item.title}
                  </a>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
