import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import "./index.css"

import Site from "./components/Site"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Site />
    </BrowserRouter>
  </React.StrictMode>
)
