async function copyTextToClipboard(text: string) {
  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText(text)
  } else {
    return document.execCommand("copy", true, text)
  }
}

function copyCitation() {
  const citation =
    "Sleegers, W. W. A. (2022). tidystats: Save output of statistical tests (Version 0.5.1) [Computer software]. https://doi.org/10.5281/zenodo.4041859;"

  copyTextToClipboard(citation)

  if (document) {
    const button = document.getElementById("citationButton")
    if (button) {
      button.innerHTML = "Copied!"
      setTimeout(function () {
        button.innerHTML = "Copy citation"
      }, 2000)
    }
  }
}

function copyBibTex() {
  const bibtex = `@software{sleegers2022,
      title = {tidystats: Save output of statistical tests},
      author = {Sleegers, Willem W. A.},
      date = {2022},
      url = {https://doi.org/10.5281/zenodo.4041859},
      version = {0.5.1}
    }`

  copyTextToClipboard(bibtex)

  if (document) {
    const button = document.getElementById("bibTexButton")
    if (button) {
      button.innerHTML = "Copied!"
      setTimeout(function () {
        button.innerHTML = "Copy BibTex"
      }, 2000)
    }
  }
}
