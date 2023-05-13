import Image from "next/image"
import Button from "@/components/Button"
import ButtonLink from "@/components/ButtonLink"
import Section from "@/components/Section"
import { supportedFunctions } from "@/app/assets/data/supportedFunctions"

import tidystatsLogo from "../app/assets/images/tidystats.svg"
import rLogo from "../app/assets/images/R.svg"
import wordLogo from "../app/assets/images/word.svg"
import twitterLogo from "../app/assets/images/twitter.svg"
import faqLogo from "../app/assets/images/question.svg"
import tipsLogo from "../app/assets/images/lightbulb.svg"
import emailLogo from "../app/assets/images/email.svg"

export default function Home() {
  return (
    <main>
      <Section gray>
        <div>
          <Image
            className="mx-auto bg-gray"
            src={tidystatsLogo}
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
          <Image src={rLogo} alt="R logo" style={{ width: 160, height: 160 }} />
        </div>
      </Section>

      <Section>
        <h2 className="text-center mb-5">Supported R packages</h2>
        <ul className="h-24 list-disc list-inside flex flex-col flex-wrap">
          {supportedFunctions.map((e) => {
            return (
              <li key={e.package} className="">
                <code className="yellow">{e.package}</code>
              </li>
            )
          })}
        </ul>
      </Section>

      <Section gray>
        <div className="flex gap-5 flex-col md:flex-row items-center">
          <Image src={wordLogo} width={160} alt="R logo" />
          <div className="flex-grow-1">
            <h2>Microsoft Word add-in</h2>
            <p>
              The tidystats Word add-in is available in the Office Add-in store.
              You can find this store in the Insert tab of your Word document.
              Once installed, you will be able to add statistics to your
              document using the file created with the tidystats R package.
            </p>
            <ButtonLink href="/word-addin/" text="Learn more" />
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-center">Support</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-5">
          <div className="text-center mx-5">
            <a href="/FAQ/">
              <Image src={faqLogo} alt="FAQ icon" width={80} height={80} />
            </a>
            <h3 className="my-4 font-medium">FAQ</h3>
          </div>
          <div className="text-center mx-5">
            <a href="/tips/">
              <Image src={tipsLogo} alt="tips icon" width={80} height={80} />
            </a>
            <h5 className="my-4 font-medium">Tips</h5>
          </div>
          <div className="text-center mx-5">
            <a href="https://twitter.com/tidystats">
              <Image
                src={twitterLogo}
                alt="Twitter logo"
                style={{ width: 80, height: 80 }}
              />
            </a>
            <h5 className="my-4 font-medium">Twitter</h5>
          </div>
          <div className="text-center mx-5">
            <a href="mailto:tidystats@gmail.com">
              <Image src={emailLogo} alt="email icon" width={80} height={80} />
            </a>
            <h5 className="my-4 font-medium">E-mail</h5>
          </div>
        </div>
      </Section>

      <Section gray>
        <h2>Citation</h2>
        <p>Please consider citing tidystats if you found it useful.</p>
        <p>
          Sleegers, W. W. A. (2022). tidystats: Save output of statistical tests
          (Version 0.5.2) [Computer software].
          https://doi.org/10.5281/zenodo.4041859
        </p>
        <div className="flex gap-3">
          <ButtonLink href="/citation/" text="Learn more" />
          <Button text="Copy citation" />
        </div>
      </Section>
    </main>
  )
}
