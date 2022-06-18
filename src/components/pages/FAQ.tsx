import { Link } from "react-router-dom"

export default function FAQ() {
  return (
    <div className="container-md my-md-4">
      <h1 className="text-center py-3">Frequently Asked Questions</h1>

      <h4 className="mt-4">
        <strong>
          Which versions of Word support the tidystats Word add-in?
        </strong>
      </h4>
      <p>The tidystats Word add-in is supported by:</p>
      <ul>
        <li>Word 2016+</li>
        <li>Word 2016 for Mac</li>
        <li>Word Online</li>
      </ul>

      <h4 className="mt-4">
        <strong>How much does tidystats cost?</strong>
      </h4>
      <p>
        Both the tidystats R package and the Word add-in are completely free to
        use. However, please consider <Link to="/citation">citing</Link> it if
        tidystats proved useful to you.
      </p>

      <h4 className="mt-4">
        <strong>Does tidystats require an internet connection?</strong>
      </h4>
      <p>
        The R package only requires an internet connection when you install the
        package, just like any R package. The Microsoft Word add-in does require
        an internet connection because the add-in is technically a web-app that
        runs inside your document.
      </p>

      <h4 className="mt-4">
        <strong>
          Does this mean that the tidystats Word add-in saves my data somewhere
          on a server?
        </strong>
      </h4>
      <p>
        No. The Word add-in only retrieves information from the server when the
        add-in is opened. Once open, the add-in will perform all computations on
        your computer.
      </p>

      <p>
        For more privacy information, see the{" "}
        <Link to="/privacy">Privacy Statement</Link>.
      </p>
    </div>
  )
}
