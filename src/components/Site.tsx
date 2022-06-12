import { Route, Routes } from "react-router-dom"

import Navbar from "./Navbar"
import Footer from "./Footer"
import Home from "../pages/Home"
import About from "../pages/About"
import R from "../pages/R"
import Word from "../pages/Word"
import Support from "../pages/Support"
import FAQ from "../pages/FAQ"
import Citation from "../pages/Citation"

import logo from "../images/tidystats-logo.svg"

const links = {
  about: "About",
  r: "R package",
  word: "Word add-in",
  support: "Support",
  citation: "Citation",
}

const Site = () => {
  return (
    <>
      <Navbar logo={logo} logoName="tidystats" links={links} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/r" element={<R />} />
        <Route path="/word" element={<Word />} />
        <Route path="/support" element={<Support />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/citation" element={<Citation />} />
      </Routes>
      <Footer />
    </>
  )
}

export default Site
