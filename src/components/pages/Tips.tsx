import Pre from "../Pre"

export default function Tips() {
  return (
    <div>
      <div className="container-md my-md-4">
        <h1 className="text-center py-3">Tips and Tricks</h1>

        <h4>
          <strong>
            Use the <code>{"%>%"}</code> operator to add multiple statistical
            tests to a list
          </strong>
        </h4>
        <p>
          tidystats is designed with the{" "}
          <a href="https://www.tidyverse.org">tidyverse</a> in mind. One of the
          things I like about the tidyverse is that functions often accept a
          data frame as the first argument, allowing you to pipe data frames
          between functions.
        </p>

        <p>
          I designed the <code>add_stats()</code> function such that you can use
          the <code>{"%>%"}</code> operator to add multiple tests to a list,
          like so:
        </p>

        <Pre>
          <code>
            results {"<-"} results {"%>%"}
            <br />
            {"  "}add_stats(sleep_test, type = "primary") {"%>%"}
            <br />
            {"  "}add_stats(lm_D9, preregistered = FALSE) {"%>%"}
            <br />
            {"  "}add_stats(npk_aov, notes = "An ANOVA example")
          </code>
        </Pre>

        <p>Alternatively, you can also do it without the operator:</p>
        <Pre>
          <code>
            results {"<-"} add_stats(results, sleep_test, type = "primary")
            <br />
            results {"<-"} add_stats(results, lm_D9, preregistered = FALSE)
            <br />
            results {"<-"} add_stats(results, npk_aov, notes = "An ANOVA
            example")
          </code>
        </Pre>

        <p>
          In the latter case, you have to repeat the assignment and the first
          argument each time you call <code>add_stats()</code>. You do not need
          to do this when you use the <code>{"%>%"}</code> operator, saving you
          some time and making your code easier to read.
        </p>
      </div>

      <div className="container mt-5 mb-4">
        <h4>
          <strong>Use Google Chrome for Word Online</strong>
        </h4>
        <p>
          Both Safari and Firefox add unnecessary scrollbars to the content of
          taskpane-based add-ins, which includes the tidystats Word add-in.
          These scrollbars unnecessarily cover content, making it a bit more
          annoying to use these types of add-ins in these browsers.
        </p>
      </div>
    </div>
  )
}
