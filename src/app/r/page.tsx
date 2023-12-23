import { Code } from "@/components/Code";
import { Section } from "@/components/Section";
import { supportedFunctions } from "@/data/supportedFunctions";

export default () => {
  return (
    <>
      <Section gray>
        <img
          className="mx-auto"
          src="/assets/images/R.svg"
          alt="R logo"
          style={{ width: 160, height: 160 }}
        />
      </Section>

      <div id="content">
        <h1 className="text-center">R package</h1>

        <p>
          tidystats is an R package designed to enable researchers to combine
          the output of their statistical analyses into a single file that can
          be shared with others or used to report statistics. This means that to
          use tidystats, you need to know R. There are many different places to
          learn R, such as this{" "}
          <a href="https://cran.r-project.org/doc/manuals/r-release/R-intro.pdf">
            introduction
          </a>{" "}
          or this book on using{" "}
          <a href="https://r4ds.had.co.nz/index.html">R for Data Science</a>.
        </p>

        <p>
          Below I explain how the tidystats R package works and provide some
          example code to help you get started.
        </p>

        <h2>Installation</h2>

        <p>
          tidystats is available on CRAN. This means the package can be
          installed using the following code:
        </p>

        <Code code='install.packages("tidystats")'></Code>

        <h2>Usage</h2>

        <p>
          tidystats is designed to have a minimal impact on the way you would
          normally conduct analyses in R. The idea is that you run the analyses
          and store the output of each analysis in a variable. You then add
          these variables to a list and save the list to a file.
        </p>

        <p>
          The main functions are <code>add_stats()</code> and{" "}
          <code>write_stats()</code>.
        </p>

        <p>
          <code>add_stats()</code> has two necessary arguments:
        </p>
        <ul>
          <li>
            <code>list</code>: A list you want to add the statistical output to.
            You can create an empty list with the <code>list()</code> function.
          </li>
          <li>
            <code>output</code>: The output of a statistical analysis you want
            to add to the list (e.g., the output of <code>t.test()</code> or
            <code>lm()</code>)
          </li>
        </ul>

        <p>Optionally, you can also add meta-information about the analysis:</p>

        <ul>
          <li>
            <code>identifier</code>: A name used to identify the output (e.g.,
            "weight_height_correlation"). If you do not provide one, one is
            automatically created for you based on the name of the variable
            containing the output.
          </li>

          <li>
            <code>type</code>: A character string specifying the type of
            analysis as primary, secondary, or exploratory.
          </li>

          <li>
            <code>preregistered</code>: A boolean (<code>TRUE</code>/
            <code>FALSE</code>) used to indicate whether the analysis was
            preregistered or not.
          </li>

          <li>
            <code>notes</code>: A character string to add additional information
            which you may find useful.
          </li>
        </ul>

        <p>
          <code>write_stats()</code> is the function to save the statistics to a
          file on your computer. It requires a list containing the output of the
          analyses as its first argument and a path name to a file on your
          computer as its second argument (with ".json" as the file extension).
        </p>

        <h2>An example</h2>

        <p>
          Below you can find an example of how to use tidystats to combine the
          output of multiple statistical analyses.
        </p>

        <p>The first step is to load the tidystats package.</p>

        <Code code={`library(tidystats)`} />

        <p>
          The code below shows how to combine the output of three different
          types of analyses: a <i>t</i>-test, a linear regression, and an ANOVA.
          The output of each analysis is stored in their own variable, called{" "}
          <code>sleep_t_test</code>, <code>D9_lm</code> and <code>npk_aov</code>
          , respectively.
        </p>

        <Code
          code={`# t-test
sleep_wide <- reshape(
  sleep,
  direction = "wide",
  idvar = "ID",
  timevar = "group",
  sep = "_"
)
sleep_t_test <- t.test(
  sleep_wide$extra_1, 
  sleep_wide$extra_2, 
  paired = TRUE
)

# lm
ctl <- c(4.17, 5.58, 5.18, 6.11, 4.50, 4.61, 5.17, 4.53, 5.33, 5.14)
trt <- c(4.81, 4.17, 4.41, 3.59, 5.87, 3.83, 6.03, 4.89, 4.32, 4.69)
group <- gl(2, 10, 20, labels = c("Ctl", "Trt"))
weight <- c(ctl, trt)
D9_lm <- lm(weight ~ group)

# ANOVA
npk_aov <- aov(yield ~ block + N * P * K, npk)`}
        />

        <p>
          After storing the output in variables, create an empty list to collect
          the statistics of each analysis. Below an empty list is created using{" "}
          <code>list()</code> and stored in a variable called called{" "}
          <code>statistics</code>. Use the <code>add_stats()</code> function to add the output of each analysis to this list. Additional
          meta-information can be added such as whether the analysis was a
          primary analysis or preregistered.
        </p>

        <Code
          code={`# Create an empty list to store the statistics in
statistics <- list()
          
# Add statistics to the list
statistics <- statistics |>
  add_stats(sleep_t_test, type = "primary", preregistered = TRUE) |>
  add_stats(D9_lm) |>
  add_stats(npk_aov, notes = "An ANOVA example")`}
        />

        <p>
          With the output of the the analyses stored in a single list, use the
          <code>write_stats()</code> function to save the list to a file.
          Remember to specify the file extension of the file as ".json".
        </p>

        <Code code={`write_stats(statistics, "statistics.json")`} />

        <p>
          This produces a file with the output stored in the{" "}
          <a href="https://en.wikipedia.org/wiki/JSON">JSON</a> format. This is
          a machine-readable format that makes it possible to easily extract
          statistics using software (like the Microsoft Word add-in). Click{" "}
          <a href="/assets/data/statistics.json">here</a> if you want to check
          out what the file of this example looks like.
        </p>

        <h2>Supported R packages</h2>

        <p>
          tidystats has built-in support for a range of functions from various
          statistical analysis packages. This means that tidystats can
          automatically extract the statistics that are returned by these
          functions. See below for an overview of supported functions.
        </p>

        <table className="mb-4">
          <thead>
            <tr className="border-b text-left">
              <th>Package</th>
              <th>Function</th>
            </tr>
          </thead>
          <tbody>
            {supportedFunctions.map((e) => {
              return (
                <tr key={e.package} className="border-b">
                  <td className="py-1 pe-3">{e.package}</td>
                  <td className="py-1">
                    {e.functions.map((f, i) => {
                      return f + (i == e.functions.length - 1 ? "" : ", ");
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <p>
          If a function is missing from the list you can request it to be added
          by contacting me (see the <a href="/support/">Support</a> page) or
          creating an{" "}
          <a href="https://github.com/WillemSleegers/tidystats/issues">issue</a>{" "}
          on GitHub.
        </p>

        <p>
          tidystats does not require built-in support for a function for it to
          be used. You can use tidystats to store and report any statistic. For
          more on this, see the <a href="/tips/">Tips</a> section.
        </p>
      </div>
    </>
  );
};
