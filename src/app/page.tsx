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
        <div className="flex flex-wrap">
          {supportedFunctions.map((e) => {
            return (
              <code
                key={e.package}
                className="gray m-2 rounded bg-test-code px-4 py-2 text-white"
              >
                {e.package}
              </code>
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

            <h3 className="mt-4 text-xl font-extrabold text-gray-700">
              Features
            </h3>
            <ul className="list-inside list-disc font-light text-gray-500">
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
        <Support />
      </Section>
    </main>
  );
};
