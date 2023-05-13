"use client"

import { useState } from "react"
import Image from "next/image"
import tidystatsLogo from "../app/assets/images/tidystats-white-bg.svg"

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
    href: "/word/",
  },
  {
    id: "google-docs",
    title: "Google Docs",
    href: "/google-docs/",
  },
  {
    id: "support",
    title: "Support",
    href: "/support/",
  },
  {
    id: "citation",
    title: "Citation",
    href: "/citation/",
  },
]

const Navbar = () => {
  const [hidden, setHidden] = useState(true)

  const handleClick = () => {
    setHidden(!hidden)
  }

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <a href="/" className="rounded py-1 px-3 flex items-center">
          <Image
            src={tidystatsLogo}
            width={32}
            height={32}
            className="mr-3"
            alt="tidystats Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            tidystats
          </span>
        </a>
        <button
          onClick={handleClick}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
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
          <ul className="font-medium p-4 md:p-0 mt-4 flex flex-col border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-2 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {items.map((item) => {
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="block py-1 px-2 font-normal rounded md:bg-transparent  text-gray-500 hover:text-gray-700"
                    aria-current="page"
                  >
                    {item.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
