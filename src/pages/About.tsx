import Section from "../components/Section"
import Footer from "../components/Footer"

import logo from "../images/tidystats-logo.svg"

export default function About() {
  return (
    <>
      <Section background="bg-light">
        <div className="py-2 text-center">
          <img src={logo} width="160" height="160" alt="tidystats logo" />
        </div>
      </Section>
      <div className="container mt-md-4">
        <h1 className="text-center py-3">About</h1>
        <p>
          I developed <code>tidystats</code> to solve two different problems in
          statistics reporting. The first problem is that of incorrect
          statistics reporting. Many scientific papers contain{" "}
          <a href="https://link.springer.com/article/10.3758/s13428-015-0664-2">
            statistical inconsistencies
          </a>
          , likely due to typos and copy-paste mistakes. The second problem is
          that of incomplete statistics reporting. Researchers often only report
          the statistics in their papers, which means they need to carefully
          balance comprehensive reporting with writing a legible text. As a
          result, statistics are sometimes summarized or omitted in favor of
          producing a clearer paper.
        </p>

        <p>
          There are several possible solutions to these two problems. To give
          people access to all the statistics, one can share the data and
          scripts of their study so that others can run the analyses themselves
          and obtain the required statistics. However, this is not (yet) very
          common, it is often time-consuming to do, and sometimes it is not
          possible to share the data.
        </p>

        <p>
          A solution to reducing statistical reporting errors is to write
          scientific papers using reproducible software solutions like R
          Markdown. However, there are some downsides to using software like{" "}
          <a href="https://rmarkdown.rstudio.com">R Markdown</a> or{" "}
          <a href="http://quarto.org">Quarto</a>. It is more difficult to
          collaborate with others and I often prefer to use software dedicated
          to writing papers, such as Microsoft Word.
        </p>

        <p>
          <code>tidystats</code> is my attempt at producing a user-friendly
          solution to the problems of incorrect and incomplete statistics
          reporting.
        </p>

        <p>
          <code>tidystats</code> works in two steps:
        </p>

        <ol>
          <li>
            Save the output of statistical tests performed in{" "}
            <a href="https://www.r-project.org">R</a>
          </li>
          <li>
            Report statistics in{" "}
            <a href="https://www.microsoft.com/en-us/microsoft-365/word">
              Microsoft Word
            </a>
          </li>
        </ol>

        <p>
          The tidystats R package is used to create a machine-readable .JSON
          file that contains all the statistics contained within your analyses.
          This file can be read by other software, such as the tidystats Word
          add-in. This addresses the problem of incomplete statistics reporting
          because the file contains all the statistics.
        </p>

        <p>
          The tidystats Word add-in can read the file created by the R package
          so that you can insert the statistics in your document using a
          human-friendly interface. Simply click on the statistic(s) you want to
          insert and the statistic(s) will be inserted into your document. This
          addresses the problem of incorrect statistics because it does not
          require manually typing in the statistics.
        </p>

        <p>
          If you want to know more, such as how to use the R package and the
          Word add-in, see their respective pages here and here.
        </p>

        <p>tidystats is developed by me.</p>
      </div>
    </>
  )
}
