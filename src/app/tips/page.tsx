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
      </main>
    </>
  );
};
