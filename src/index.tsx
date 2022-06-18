import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom"

import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import "./index.css"

import Site from "./components/Site"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <HashRouter>
      <Site />
    </HashRouter>
  </React.StrictMode>
)
