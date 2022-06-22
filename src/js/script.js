async function copyTextToClipboard(text) {
  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText(text)
  } else {
    return document.execCommand("copy", true, text)
  }
}

function copyCitation() {
  const citation =
    "Sleegers, W. W. A. (2020). tidystats: Save output of statistical tests (Version 0.5) [Computer software]. https://doi.org/10.5281/zenodo.4041859;"

  copyTextToClipboard(citation)

  document.getElementById("citationButton").innerHTML = "Copied!"
  setTimeout(function () {
    document.getElementById("citationButton").innerHTML = "Copy citation"
  }, 2000)
}

function copyBibTex() {
  const bibtex = `@software{sleegers2020,
    title = {tidystats: Save output of statistical tests},
    author = {Sleegers, Willem W. A.},
    date = {2020},
    url = {https://doi.org/10.5281/zenodo.4041859},
    version = {0.5}
  }`

  copyTextToClipboard(bibtex)

  document.getElementById("bibTexButton").innerHTML = "Copied!"
  setTimeout(function () {
    document.getElementById("bibTexButton").innerHTML = "Copy BibTex"
  }, 2000)
}
