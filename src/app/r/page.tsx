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
        <h1>R package</h1>

        <p>
          tidystats is an R package designed to enable researchers to combine
          the output of their analyses into a single file that can be shared
          with others or used to report statistics. This means that to use
          tidystats, you need to know R. There are many different places to
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
          these variables to a list and save the list to a file on your
          computer.
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
            <code>results</code>: A list you want to add the statistical output
            to. You can create an empty list with the <code>list()</code>
            function.
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
            <code>identifier</code>: A name used to identify the model (e.g.,
            "weight_height_correlation"). If you do not provide one, one is
            automatically created for you based on the name of the variable
            containing the analysis.
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
            which you may find fruitful.
          </li>
        </ul>

        <p>
          <code>write_stats()</code> is the function to save the statistics to a
          file on your computer. It requires a list containing the analyses as
          its first argument and a path name to a file on your computer as its
          second argument.
        </p>

        <h2>An example</h2>

        <p>Below I show an example of how to use tidystats.</p>

        <p>
          The first step is to load the necessary packages. I load the tidystats
          package to get access to its functions and I load the dplyr package
          for access to the <code>{"%>%"}</code> operator.
        </p>

        <pre>
          <code>library(tidystats){"\n"}library(dplyr)</code>
        </pre>

        <p>
          In the code below I conduct three different types of analyses: a
          <i>t</i>-test, a linear regression, and an ANOVA. I store the result
          of each analysis in their own variable, called <code>sleep_test</code>{" "}
          ,<code>lm_D9</code> and <code>npk_aov</code>, respectively.
        </p>

        <pre>
          <code>
            # t-test{"\n"}
            sleep_test {"<-"} t.test(extra ~ group, data = sleep, paired = TRUE)
            {"\n\n"}# lm{"\n"}
            ctl {"<-"} c(4.17, 5.58, 5.18, 6.11, 4.50, 4.61, 5.17, 4.53, 5.33,
            5.14){"\n"}
            trt {"<-"} c(4.81, 4.17, 4.41, 3.59, 5.87, 3.83, 6.03, 4.89, 4.32,
            4.69){"\n"}
            group {"<-"} gl(2, 10, 20, labels = c("Ctl", "Trt")){"\n"}
            weight {"<-"} c(ctl, trt){"\n"}
            lm_D9 {"<-"} lm(weight ~ group){"\n\n"}# ANOVA{"\n"}
            npk_aov {"<-"} aov(yield ~ block + N*P*K, npk)
          </code>
        </pre>

        <p>
          Next, I use tidystats to collect the statistics of each analysis. I
          start by creating an empty list called <code>results</code> and then
          use the <code>add_stats()</code> function to add each analysis to this
          list. I also add some additional meta-information such as whether the
          analysis was a primary analysis or preregistered.
        </p>

        <pre>
          <code>
            # Create an empty list{"\n"}
            results {"<-"} list(){"\n\n"}# Add the analyses to the empty list
            {"\n"}
            results {"<-"} results {"%>%\n  "}
            add_stats(sleep_test, type = "primary") {"%>%\n  "}
            add_stats(lm_D9, preregistered = FALSE) {"%>%\n  "}
            add_stats(npk_aov, notes = "An ANOVA example")
          </code>
        </pre>

        <p>
          With all the analyses now stored in a single list, I use the
          <code>write_stats()</code> function to save the list to a file.
        </p>

        <pre>
          <code>write_stats(results, "results.json")</code>
        </pre>

        <p>
          This produces a JSON file. The JSON file contains all statistics in a
          machine-readable format. If you want to check out what the file of
          this example looks like, click{" "}
          <a href="/assets/data/results.json">here</a>.
        </p>

        <h2>Supported R packages</h2>

        <div className="flex flex-wrap">
          {supportedFunctions.map((e) => {
            return (
              <code
                key={e.package}
                className="bg-yellow gray m-2 rounded px-4 py-2 text-white"
              >
                {e.package}
              </code>
            );
          })}
        </div>
      </div>
    </>
  );
};