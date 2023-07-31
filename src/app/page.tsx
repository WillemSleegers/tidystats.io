import { LearnMore } from "@/components/LearnMore";
import { Section } from "@/components/Section";
import { Support } from "@/components/Support";
import { supportedFunctions } from "@/data/supportedFunctions";

export default () => {
  return (
    <main>
      <Section>
        <div className="flex flex-col-reverse items-center justify-between md:flex-row">
          <div className="flex-grow-0">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl">
              Reproducibly report statistics
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl">
              Conduct analyses in R and use tidystats to report statistics in
              popular text editors.
            </p>
          </div>
          <div className="flex-grow-1 w-56">
            <img src="/assets/images/tidystats.svg" alt="tidystats logo" />
          </div>
        </div>
      </Section>

      <Section gray>
        <h2 className="mb-4 text-4xl font-extrabold text-gray-900">
          What is tidystats?
        </h2>
        <p className="font-light text-gray-500 sm:text-xl">
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
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900">
              R package
            </h2>
            <p className="font-light text-gray-500 sm:text-xl">
              The tidystats R package is available on CRAN. Install the package
              by running{" "}
              <code className="yellow">install.packages("tidystats")</code> in
              R. For more information about the package, including documentation
              for the functions and tutorials on how to use tidystats, click the
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
        <h2 className="mb-4 text-center text-4xl font-extrabold text-gray-900">
          Supported R packages
        </h2>
        <div className="flex flex-wrap">
          {supportedFunctions.map((e) => {
            return (
              <code
                key={e.package}
                className="gray m-2 rounded bg-blue-100 px-4 py-2 text-blue-600"
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
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900">
              Microsoft Word add-in
            </h2>

            <p className="font-light text-gray-500 sm:text-xl">
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
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900">
              Google Docs add-in
            </h2>
            <p className="font-light text-gray-500 sm:text-xl">
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
        <h2 className="mb-4 text-center text-4xl font-extrabold text-gray-900">
          Support
        </h2>
        <Support />
      </Section>
    </main>
  );
};
