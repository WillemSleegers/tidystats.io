import { Link } from "react-router-dom"

import Section from "../Section"
import Pre from "../Pre"
import SupportedFunctions from "../SupportedFunctions"

import LogoR from "../LogoR"

export default function R() {
  return (
    <>
      <Section background="bg-light">
        <div className="py-2 text-center">
          <LogoR width="160" height="160" />
        </div>
      </Section>
      <div className="container-md py-5">
        <h1 className="text-center mb-4">R package</h1>

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

        <h3>Installation</h3>

        <p>
          tidystats is available on CRAN. This means the package can be
          installed using the following code:
        </p>

        <Pre>
          <code>install.packages("tidystats")</code>
        </Pre>

        <h3>Usage</h3>

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
            to. You can create an empty list with the <code>list()</code>{" "}
            function.
          </li>
          <li>
            <code>output</code>: The output of a statistical analysis you want
            to add to the list (e.g., the output of <code>t.test()</code> or{" "}
            <code>lm()</code>)
          </li>
        </ul>

        <p>
          Optionally, you can also specify an identifier, the type of analysis,
          whether the analysis was preregistered, and/or additional notes. This
          meta-information will be added to the analysis when you add it to the
          list.
        </p>

        <ul>
          <li>
            <code>identifier</code>: A name used to identify the model (e.g.,
            ‘weight_height_correlation’). If you do not provide one, one is
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

        <h3>An example</h3>

        <p>Below I show an example of how to use tidystats.</p>

        <p>
          The first step is to load the necessary packages. I load the tidystats
          package to get access to its functions and I load the dplyr package
          for access to the <code>{"%>%"}</code> operator.
        </p>

        <Pre>
          <code>
            library(tidystats)
            <br />
            library(dplyr)
          </code>
        </Pre>

        <p>
          In the code below I conduct three different types of analyses: a
          <i>t</i>-test, a linear regression, and an ANOVA. I store the result
          of each analysis in their own variable, called <code>sleep_test</code>
          , <code>lm_D9</code> and <code>npk_aov</code>, respectively.
        </p>

        <Pre>
          <code>
            # t-test
            <br />
            sleep_test {"<-"} t.test(extra ~ group, data = sleep, paired = TRUE)
            <br />
            <br />
            # lm
            <br />
            ctl {"<-"}c(4.17,5.58,5.18,6.11,4.50,4.61,5.17,4.53,5.33,5.14)
            <br />
            trt {"<-"} c(4.81,4.17,4.41,3.59,5.87,3.83,6.03,4.89,4.32,4.69)
            <br />
            group {"<-"} gl(2, 10, 20, labels = c("Ctl","Trt"))
            <br />
            weight {"<-"} c(ctl, trt) lm_D9 {"<-"} lm(weight ~ group)
            <br />
            <br />
            # ANOVA
            <br />
            npk_aov {"<-"} aov(yield ~ block + N*P*K, npk)
          </code>
        </Pre>

        <p>
          Next, I use tidystats to collect the statistics of each analysis. I
          start by creating an empty list called <code>results</code> and then
          use the <code>add_stats()</code> function to add each analysis to this
          list. I also add some additional meta-information such as whether the
          analysis was a primary analysis or preregistered.
        </p>

        <Pre>
          <code>
            # Create an empty list
            <br />
            results &lt;- list()
            <br />
            <br />
            # Add the analyses to the empty list
            <br />
            results &lt;- results {"%>%"}
            <br />
            {"  "}add_stats(sleep_test, type = "primary") {"%>%"}
            <br />
            {"  "}add_stats(lm_D9, preregistered = FALSE) {"%>%"}
            <br />
            {"  "}add_stats(npk_aov, notes = "An ANOVA example")
          </code>
        </Pre>

        <p>
          With all the analyses now stored in a single list, I use the{" "}
          <code>write_stats()</code> function to save the list to a file.
        </p>

        <Pre>
          <code>write_stats(results, "results.json")</code>
        </Pre>

        <p>
          This produces a JSON file. The JSON file contains all statistics in a
          machine-readable format. If you want to check out what the file of
          this example looks like, click <a href="data/results.json">here</a>.
        </p>

        <h3>Supported functions</h3>

        <p>tidystats supports the following R functions:</p>

        <SupportedFunctions />

        <h3>Support</h3>

        <p>
          Do you have a question or comment, such as a feature request, about
          tidystats? Check out the <Link to="/support">support</Link> page for
          ways to contact me.
        </p>
      </div>
    </>
  )
}
