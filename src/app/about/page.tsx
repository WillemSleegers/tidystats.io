import { Section } from "@/components/Section";

export default () => {
  return (
    <>
      <Section gray>
        <div>
          <img
            className="mx-auto"
            src="/assets/images/tidystats.svg"
            alt="tidystats logo"
            style={{ width: 160, height: 160 }}
          />
        </div>
      </Section>
      <div id="content">
        <h1>About</h1>
        <p>
          I developed test tidystats to solve two different problems in
          statistics reporting:
        </p>
        <ol>
          <li>Incorrect statistics</li>
          <li>Incomplete statistics</li>
        </ol>
        <h2>Incorrect statistics</h2>
        <p>
          Many scientific papers contain{" "}
          <a href="https://link.springer.com/article/10.3758/s13428-015-0664-2">
            statistical inconsistencies
          </a>
          . These inconsistencies are detected via software like{" "}
          <a href="https://michelenuijten.shinyapps.io/statcheck-web/">
            statcheck
          </a>
          . This software detects statistics and re-calculates certain
          statistics in a paper to see whether the reported statistics match the
          re-calculated statistics. This technique has revealed often the
          statistics don't line up, meaning that the reported statistics are
          incorrect. This shouldn't be surprising because the most common method
          for inserting statistics is by simply manually typing them into a text
          editor or by copy-pasting results from the statistics software. In
          either case, it is easy to make a mistake, causing these statistical
          inconsistencies.
        </p>
        <h2>Incomplete statistics</h2>
        <p>
          Not all statistics are reported. Researchers often only report the
          statistics in their papers, which means they need to carefully balance
          comprehensive reporting with writing a legible text. As a result,
          statistics are sometimes summarized or omitted in favor of producing a
          clearer paper. While this may seem like a reasonable compromise, the
          statistics are still necessary to check conclusions or for use in
          subsequent work (e.g., meta-analyses).
        </p>

        <h2>Solutions</h2>
        <p>
          There are several possible solutions to these two problems. To give
          everyone access to the statistics, one can share the data and scripts
          of their study so that others can run the analyses themselves and
          obtain the required statistics. However, this is not (yet) very
          common, it is often time-consuming to do, and sometimes it is not
          possible to share the data.
        </p>

        <p>
          A solution to reducing statistical reporting errors is to write
          scientific papers using reproducible software solutions. However,
          there are some downsides to using software like{" "}
          <a href="https://rmarkdown.rstudio.com">R Markdown</a> or{" "}
          <a href="http://quarto.org">Quarto</a>. It is more difficult to
          collaborate with others and the software is not as feature rich as
          more well-known text editors such as Microsoft Word or Google Docs.
        </p>

        <h2>tidystats</h2>
        <p>
          tidystats is my attempt at producing a user-friendly solution to the
          problems of incorrect and incomplete statistics reporting.
        </p>

        <p>tidystats works in two steps:</p>
        <ol>
          <li>
            Save the output of statistical tests performed in{" "}
            <a href="https://www.r-project.org">R</a>
          </li>
          <li>
            Report statistics in{" "}
            <a href="https://www.microsoft.com/en-us/microsoft-365/word">
              Microsoft Word
            </a>{" "}
            or <a href="https://www.google.com/docs/about/">Google Docs</a>
          </li>
        </ol>

        <p>
          The tidystats R package is used to create a machine-readable .JSON
          file that contains all the statistics from your analyses. This file
          can be read by other software, such as the tidystats Word add-in or
          Google Docs add-in. This addresses the problem of incomplete
          statistics reporting because the file contains all the statistics. You
          can report the statistics easily using this file, or share the file
          itself so all statistics are shared.
        </p>

        <p>
          The tidystats Word add-in and Google Docs add-in can read the file
          created by the R package so that you can insert the statistics in your
          document using a human-friendly interface. Simply click on the
          statistic(s) you want to insert and the statistic(s) will be inserted
          into your document. This addresses the problem of incorrect statistics
          because it does not require manually typing in the statistics.
        </p>

        <p>
          If you want to know more, check out the page about the{" "}
          <a href="/r-package/">R package</a>,{" "}
          <a href="/word-add-in/">Word add-in</a>, or the{" "}
          <a href="/google-docs/">Google Docs add-in</a>.
        </p>

        <p>
          Finally, tidystats is developed by <a href="/me/">me</a>.
        </p>
      </div>
    </>
  );
};
