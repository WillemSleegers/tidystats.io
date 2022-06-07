import logo from "../tidystats-logo.svg"
import Navbar from "./Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Pricing from "./pages/Pricing"
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <>
      <Navbar logo={logo} logoName="tidystats" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  )
}

export default App
