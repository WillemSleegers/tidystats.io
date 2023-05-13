import { Section } from "@/components/Section"
import { Link } from "@/components/Link"

export default () => {
  return (
    <>
      <Section gray>
        <img
          className="mx-auto"
          src="/assets/images/google-docs.svg"
          alt="Google Docs logo"
          style={{ width: 160, height: 160 }}
        />
      </Section>

      <Section>
        <h1 className="text-center">Google Docs add-in</h1>

        <p>
          A tidystats Google Docs add-in is currently in development and is
          expected to be released this year.
        </p>

        <p>
          With the tidystats Google Docs add-in you will be able to insert
          statistics into a Google Docs document. Each Google Doc statistic
          becomes a link that is used to identify the statistic. This tracking
          used to enable the feature to automatically update all statistics in
          the document. See the{" "}
          <Link href="/google-docs/google-docs-statistic/">
            Google Docs Statistic
          </Link>{" "}
          page for more information on how this works.
        </p>
      </Section>
    </>
  )
}
