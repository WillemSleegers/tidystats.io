import { Button, ButtonLink } from "@/components/Buttons"
import { Section } from "@/components/Section"
import { Support } from "@/components/Support"
import { supportedFunctions } from "@/data/supportedFunctions"

export default () => {
  return (
    <main>
      <Section gray>
        <div>
          <img
            className="mx-auto bg-gray"
            src="/assets/images/tidystats.svg"
            alt="tidystats logo"
            width={150}
          />
          <div className="text-center">
            <h1>tidystats</h1>
            <p className="text-lg">Reproducibly report statistics</p>
          </div>
        </div>
      </Section>

      <Section>
        <h2>What is tidystats?</h2>
        <p>
          tidystats is a software solution designed to help researchers report
          the output of statistical analyses. It consists of an R package whose
          main function is to gather the statistics from statistical analyses
          and an Office add-in to reproducibly report statistics in Microsoft
          Word.
        </p>
        <ButtonLink href="/about/" text="Learn more" />
      </Section>

      <Section gray>
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="flex-grow-1">
            <h2>R package</h2>
            <p>
              The tidystats R package is available on CRAN. Install the package
              by running{" "}
              <code className="yellow">install.packages("tidystats")</code> in
              R. For more information about the package, including documentation
              for the functions and tutorials on how to use tidystats, click the
              button below.
            </p>
            <ButtonLink href="/r-package/" text="Learn more" />
          </div>
          <img
            src="/assets/images/R.svg"
            alt="R logo"
            style={{ width: 160, height: 160 }}
          />
        </div>
      </Section>

      <Section>
        <h2 className="text-center mb-5">Supported R packages</h2>
        <div className="flex flex-wrap">
          {supportedFunctions.map((e) => {
            return (
              <code
                key={e.package}
                className="text-white bg-yellow m-2 gray rounded px-4 py-2"
              >
                {e.package}
              </code>
            )
          })}
        </div>
      </Section>

      <Section gray>
        <div className="flex gap-5 flex-col md:flex-row items-center">
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
            <ButtonLink href="/word/" text="Learn more" />
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex gap-5 flex-col md:flex-row items-center">
          <div className="flex-grow-1">
            <h2>Google Docs add-in</h2>
            <p>
              The tidystats Google Docs add-in is currently in development.
              Currently, you can find this add-in on the GitHub page and install
              it to test out the add-in. Soon it will be made available in the
              Google Workspace Marketplace. Once installed, you will be able to
              add statistics to your document using the file created with the
              tidystats R package.
            </p>
            <ButtonLink href="/google-docs/" text="Learn more" />
          </div>
          <img
            src="/assets/images/google-docs.svg"
            alt="Google Docs logo"
            style={{ width: 160, height: 160 }}
          />
        </div>
      </Section>

      <Section gray>
        <h2 className="text-center">Support</h2>
        <Support />
      </Section>

      <Section>
        <h2>Citation</h2>
        <p>Please consider citing tidystats if you found it useful.</p>
        <p>
          Sleegers, W. W. A. (2022). tidystats: Save output of statistical tests
          (Version 0.5.2) [Computer software].
          https://doi.org/10.5281/zenodo.4041859
        </p>
        <div className="flex gap-3">
          <ButtonLink href="/support/" text="Learn more" />
          <Button text="Copy citation" />
        </div>
      </Section>
    </main>
  )
}
