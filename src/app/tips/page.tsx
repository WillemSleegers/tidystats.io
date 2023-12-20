import { Code } from "@/components/Code";
import { Section } from "@/components/Section";

export default () => {
  return (
    <>
      <Section gray>
        <img
          className="mx-auto"
          src="/assets/images/lightbulb.svg"
          alt="tips logo"
          style={{ width: 160, height: 160 }}
        />
      </Section>
      <main id="content">
        <h1 className="text-center">Tips</h1>
        <h2>
          Use the <code>{"|>"}</code> operator to add multiple statistical tests
          to a list
        </h2>
        <p>
          I designed the <code>add_stats()</code> function such that you can use
          the <code>{"|>"}</code> operator to add multiple tests to a list, like
          so:
        </p>
        <Code
          code={`statistics <- statistics |>
  add_stats(sleep_t_test, type = "primary", preregistered = TRUE) |>
  add_stats(D9_lm) |>
  add_stats(npk_aov, notes = "An ANOVA example")`}
        />
        <p>Alternatively, you can also do it without the operator:</p>
        <Code
          code={`statistics <- add_stats(
  statistics, 
  sleep_t_test, type = "primary", preregistered = TRUE
)
statistics <- add_stats(statistics, lm_D9)
statistics <- add_stats(statistics, npk_aov, notes = "An ANOVA example")`}
        />
        <p>
          In the latter case, you have to repeat the assignment and the first
          argument each time you call <code>add_stats()</code>. You do not need
          to do this when you use the <code>{"|>"}</code> operator, saving you
          some time and making your code easier to read.
        </p>
        <h2>
          Use the <code>custom_stats()</code> and <code>custom_stat()</code> functions from the R package to store statistics from unsupported functions
        </h2>
        <p>The normal tidystats workflow consists of running statistical functions such as <code>lm()</code>, saving the output into variables, and then using the <code>add_stats()</code> function to add the statistics to a list. This works as long as tidystats has built-in support for the statistics function.</p>

        <p>If there is no support for a particular function you want to save the statistics of, you can use the <code>custom_stats()</code> and <code>custom_stat()</code> functions to still store the statistics. Below is an example of how to use these functions.</p>

        <Code code={`library(tidystats)

# Run a regression and calculate the AIC and BIC
lm1 <- lm(Fertility ~ ., data = swiss)
aic <- AIC(lm1)
bic <- BIC(lm1)

# Create a custom stats variable containing the AIC and BIC values
aic_bic <- custom_stats(
  method = "AIC and BIC",
  statistics = c(
    custom_stat(name = "AIC", value = aic),
    custom_stat(name = "BIC", value = bic)
  )
)

# Create an empty statistics list and add the AIC and BIC statistics
statistics <- list()
statistics <- add_stats(statistics, aic_bic)

write_stats(statistics, "custom-stats.json")`} />
      </main>
    </>
  );
};
