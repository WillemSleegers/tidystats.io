import Image from "next/image"
import Section from "@/components/Section"
import Link from "@/components/Link"
import tidystatsLogo from "../../app/assets/images/tidystats.svg"

const About = () => {
  return (
    <>
      <Section gray>
        <div>
          <Image
            className="mx-auto"
            src={tidystatsLogo}
            alt="tidystats logo"
            width={150}
          />
        </div>
      </Section>
      <Section>
        <h1 className="text-center">About</h1>
        <p>
          I developed test tidystats to solve two different problems in
          statistics reporting. The first problem is that of incorrect
          statistics reporting. Many scientific papers contain{" "}
          <Link href="https://link.springer.com/article/10.3758/s13428-015-0664-2">
            statistical inconsistencies
          </Link>
          , likely due to typos and copy-paste mistakes. The second problem is
          that of incomplete statistics reporting. Researchers often only report
          the statistics in their papers, which means they need to carefully
          balance comprehensive reporting with writing a legible text. As a
          result, statistics are sometimes summarized or omitted in favor of
          producing a clearer paper. While this may seem like a reasonable
          compromise, the statistics are still necessary to check conclusions or
          for use in subsequent work (e.g., meta-analyses).
        </p>

        <p>
          There are several possible solutions to these two problems. To give
          everyone access to the statistics, one can share the data and scripts
          of their study so that others can run the analyses themselves and
          obtain the required statistics. However, this is not (yet) very
          common, it is often time-consuming to do, and sometimes it is not
          possible to share the data.
        </p>

        <p>
          A solution to reducing statistical reporting errors is to write
          scientific papers using reproducible software solutions. However,
          there are some downsides to using software like{" "}
          <Link href="https://rmarkdown.rstudio.com">R Markdown</Link> or{" "}
          <Link href="http://quarto.org">Quarto</Link>. It is more difficult to
          collaborate with others and I often prefer to use software dedicated
          to writing papers, such as Microsoft Word or Google Docs.
        </p>

        <p>
          tidystats is my attempt at producing a user-friendly solution to the
          problems of incorrect and incomplete statistics reporting.
        </p>

        <p>tidystats works in two steps:</p>

        <ol className="list-decimal list-inside">
          <li>
            Save the output of statistical tests performed in{" "}
            <Link href="https://www.r-project.org">R</Link>
          </li>
          <li>
            Report statistics in{" "}
            <Link href="https://www.microsoft.com/en-us/microsoft-365/word">
              Microsoft Word
            </Link>{" "}
            or{" "}
            <Link href="https://www.google.com/docs/about/">Google Docs</Link>
          </li>
        </ol>

        <p>
          The tidystats R package is used to create a machine-readable .JSON
          file that contains all the statistics from your analyses. This file
          can be read by other software, such as the tidystats Word add-in or
          Google Docs add-in. This addresses the problem of incomplete
          statistics reporting because the file contains all the statistics. You
          can report the statistics easily using this file, or share the file
          itself so all statistics are shared.
        </p>

        <p>
          The tidystats Word add-in and Google Docs add-in can read the file
          created by the R package so that you can insert the statistics in your
          document using a human-friendly interface. Simply click on the
          statistic(s) you want to insert and the statistic(s) will be inserted
          into your document. This addresses the problem of incorrect statistics
          because it does not require manually typing in the statistics.
        </p>

        <p>
          If you want to know more, check out the page about the{" "}
          <Link href="/r-package/">R package</Link>,{" "}
          <Link href="/word-add-in/">Word add-in</Link>, or the{" "}
          <Link href="/google-docs/">Google Docs add-in</Link>.
        </p>

        <p>
          Finally, tidystats is developed by <Link href="/me/">me</Link>.
        </p>
      </Section>
    </>
  )
}

export default About
