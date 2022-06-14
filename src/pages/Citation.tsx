import { useState } from "react"

export default function Citation() {
  const [citationButtonLabel, setCitationButtonLabel] =
    useState("Copy citation")
  const [bibTexButtonLabel, setBibTexButtonLabel] = useState("Copy BibTex")

  const citation =
    "Sleegers, W. W. A. (2020). tidystats: Save output of statistical tests (Version 0.5) [Computer software]. https://doi.org/10.5281/zenodo.4041859;"

  const bibtex = `@software{sleegers2020,
    title = {tidystats: Save output of statistical tests},
    author = {Sleegers, Willem W. A.},
    date = {2020},
    url = {https://doi.org/10.5281/zenodo.4041859},
    version = {0.5}
  }`

  async function copyTextToClipboard(text: string) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text)
    } else {
      return document.execCommand("copy", true, text)
    }
  }

  return (
    <div className="container-md my-md-4">
      <h1 className="text-center my-3">Citation</h1>

      <p>
        <code>tidystats</code> is free to use, but please consider citing the
        tidystats software if you found it useful. This is the best way to
        support me developing this software.
      </p>

      <p>For now, I recommend citing only the R package.</p>

      <div className="alert alert-light">
        Sleegers, W. W. A. (2020). tidystats: Save output of statistical tests
        (Version 0.5) [Computer software].
        https://doi.org/10.5281/zenodo.4041859
      </div>

      <p>
        Below are several ways to cite this citation. You can copy the reference
        to paste it in the References list or copy the BibTex to import it into
        a reference manager such as <a href="http://zotero.org">Zotero</a>.
      </p>

      <div className="d-flex gap-3 mb-3">
        <button
          className="btn btn-primary btn-lg"
          style={{ width: "150px" }}
          onClick={() => {
            copyTextToClipboard(citation)
            setCitationButtonLabel("Copied!")
            setTimeout(() => {
              setCitationButtonLabel("Copy citation")
            }, 2000)
          }}
        >
          {citationButtonLabel}
        </button>
        <button
          className="btn btn-success btn-lg"
          style={{ width: "150px" }}
          onClick={() => {
            copyTextToClipboard(bibtex)
            setBibTexButtonLabel("Copied!")
            setTimeout(() => {
              setBibTexButtonLabel("Copy BibTex")
            }, 2000)
          }}
        >
          {bibTexButtonLabel}
        </button>
      </div>

      <p>
        Additionally, please consider reviewing the Word add-in. You can leave a
        review by going to My Add-ins. Click on the three dots button and select
        Rate and review. Alternatively, visit the{" "}
        <a href="https://appsource.microsoft.com/en-us/product/office/WA200002476?tab=Overview">
          AppSource
        </a>{" "}
        page of tidystats and leave a review there.
      </p>
    </div>
  )
}
