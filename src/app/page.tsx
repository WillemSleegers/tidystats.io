import { LearnMore } from "@/components/LearnMore";
import { Section } from "@/components/Section";
import { Support } from "@/components/Support";
import { supportedFunctions } from "@/data/supportedFunctions";

export default () => {
  return (
    <main id="landing">
      <Section>
        <div className="flex flex-col-reverse items-center justify-between gap-3 md:flex-row">
          <div className="flex-grow-0 text-lg">
            <h1 className="text-center text-3xl font-extrabold leading-none sm:text-4xl md:text-left md:text-5xl lg:text-6xl">
              Reproducibly report statistics
            </h1>
            <p className="text-center md:text-left">
              Conduct analyses in R and use tidystats to report statistics in
              popular text editors.
            </p>
          </div>
          <div className="flex-grow-1 my-6 w-56">
            <img src="/assets/images/tidystats.svg" alt="tidystats logo" />
          </div>
        </div>
      </Section>

      <Section gray>
        <h2>What is tidystats?</h2>
        <p>
          tidystats is a software solution designed to help researchers report
          the output of statistical analyses. It consists of an R package whose
          main function is to gather the statistics from statistical analyses
          and an Office add-in to reproducibly report statistics in Microsoft
          Word.
        </p>
        <LearnMore href="/about/" text="Learn more" />
      </Section>

      <Section>
        <div className="flex flex-col items-center gap-5 md:flex-row">
          <div className="flex-grow-1">
            <h2>R package</h2>
            <p>
              The tidystats R package is available on CRAN. Install the package
              by running <code>install.packages("tidystats")</code> in R. For
              more information about the package, including documentation for
              the functions and tutorials on how to use tidystats, click the
              button below.
            </p>
            <LearnMore href="/r-package/" text="Learn more" />
          </div>
          <img
            src="/assets/images/R.svg"
            alt="R logo"
            style={{ width: 160, height: 160 }}
          />
        </div>
      </Section>

      <Section gray>
        <h2 className="text-center">Supported R packages</h2>
        <div className="mt-10 flex flex-wrap gap-4">
          {supportedFunctions.map((e) => {
            return (
              <span
                key={e.package}
                className="mx-4 rounded border bg-white px-3 py-1 text-lg shadow"
              >
                {e.package}
              </span>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="flex flex-col items-center gap-5 md:flex-row">
          <img
            src="/assets/images/word.svg"
            alt="Microsoft Word logo"
            style={{ width: 160, height: 160 }}
          />
          <div className="flex-grow-1">
            <h2>Microsoft Word add-in</h2>

            <p>
              The tidystats Word add-in is available in the Office Add-in store.
              You can find this store in the Insert tab of your Word document.
              Once installed, you will be able to add statistics to your
              document using the file created with the tidystats R package.
            </p>

            <h3 className="mb-2 mt-4 font-extrabold lg:text-2xl">Features</h3>
            <ul className="list-inside list-disc">
              <li>APA-style reporting</li>
              <li>Insert tables</li>
              <li>Automatic updating</li>
            </ul>

            <LearnMore href="/word/" text="Learn more" />
          </div>
        </div>
      </Section>

      <Section gray>
        <div className="flex flex-col items-center gap-5 md:flex-row">
          <div className="flex-grow-1">
            <h2>Google Docs add-in</h2>
            <p>
              The tidystats Google Docs add-in is currently in development.
              Currently, you can find this add-in on the GitHub page and install
              it to test out the add-in. Soon it will be made available in the
              Google Workspace Marketplace.
            </p>
            <LearnMore href="/google-docs/" text="Learn more" />
          </div>
          <img
            src="/assets/images/google-docs.svg"
            alt="Google Docs logo"
            style={{ width: 160, height: 160 }}
          />
        </div>
      </Section>

      <Section>
        <h2 className="text-center">Support</h2>
        <p>
          Check out the <a href="/support/FAQ/">FAQ</a> and{" "}
          <a href="/support/tips/">tips</a> sections for frequently asked
          questions and tips for how to use tidystats. If you need any
          additional support, feel free to contact me via{" "}
          <a href="https://twitter.com/tidystats">X</a> or{" "}
          <a href="mailto:tidystats@gmail.com">e-mail</a>.
        </p>
      </Section>
    </main>
  );
};
