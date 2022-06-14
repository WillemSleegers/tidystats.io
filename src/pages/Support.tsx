import { Link } from "react-router-dom"

import logoTwitter from "../images/twitter.svg"

export default function Support() {
  return (
    <div className="container-md my-5">
      <h1 className="text-center py-3">Support</h1>
      <p>
        Do you have a question about tidystats or is something not working?
        Please check the Frequently Asked Questions (FAQ), tips & tricks, or
        contact me via Twitter or e-mail.
      </p>
      <div className="d-flex justify-content-around flex-wrap gap-5 mt-5 text-center">
        <div className="mx-4" style={{ width: "100px" }}>
          <Link to="/FAQ">
            <svg
              width="80"
              height="80"
              viewBox="0 0 16 16"
              className="bi bi-question-circle-fill"
              fill="#18bc9c"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z"
              />
            </svg>
          </Link>
          <h4 className="mt-4">FAQ</h4>
        </div>
        <div className="mx-4" style={{ width: "100px" }}>
          <Link to="/tips">
            <svg
              width="80"
              height="80"
              viewBox="0 0 16 16"
              className="bi bi-lightbulb"
              fill="#f39c12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
            </svg>
          </Link>
          <h4 className="mt-4">Tips & Tricks</h4>
        </div>
        <div className="mx-4" style={{ width: "100px" }}>
          <a href="https://twitter.com/tidystats">
            <img src={logoTwitter} alt="Twitter logo" width="80" height="80" />
          </a>
          <h4 className="mt-4">Twitter</h4>
        </div>
        <div className="mx-4" style={{ width: "100px" }}>
          <a href="mailto:tidystats@gmail.com">
            <svg
              width="80"
              height="80"
              viewBox="0 0 16 16"
              className="bi bi-envelope-fill"
              fill="#95a5a6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
              />
            </svg>
          </a>
          <h4 className="mt-4">E-mail</h4>
        </div>
      </div>
    </div>
  )
}
