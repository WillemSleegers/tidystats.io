export default function FAQ() {
  return (
    <div className="container py-5">
      <div className="col-md-10 mx-auto">
        <h2 className="text-center mb-5">Frequently Asked Questions</h2>

        <div className="container mb-4">
          <h4>
            <strong>
              Which versions of Word support the tidystats Word add-in?
            </strong>
          </h4>
          <p className="lead">The tidystats Word add-in is supported by:</p>
          <ul className="lead">
            <li>Word 2016+</li>
            <li>Word 2016 for Mac</li>
            <li>Word Online</li>
          </ul>
        </div>

        <div className="container mt-5 mb-4">
          <h4>
            <strong>How much does tidystats cost?</strong>
          </h4>
          <p className="lead">
            Both the tidystats R package and the Word add-in are completely free
            to use. However, please consider
            <a href="citation.html">citing</a> it if tidystats proved useful to
            you.
          </p>
        </div>

        <div className="container mt-5 mb-4">
          <h4>
            <strong>Does tidystats require an internet connection?</strong>
          </h4>
          <p className="lead">
            The R package only requires an internet connection when you install
            the package, just like any R package. The Microsoft Word add-in does
            require an internet connection because the add-in is technically a
            web-app that runs inside your document.
          </p>
        </div>

        <div className="container mt-5 mb-4">
          <h4>
            <strong>
              Does this mean that the tidystats Word add-in saves my data
              somewhere on a server?
            </strong>
          </h4>
          <p className="lead">
            No. The Word add-in only retrieves information from the server when
            the add-in is opened. Once open, the add-in will perform all
            computations on your computer.
          </p>

          <p className="lead">
            For more privacy information, see the
            <a href="privacy.html">Privacy Statement</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
