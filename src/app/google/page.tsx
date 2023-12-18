import { Section } from "@/components/Section";

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

      <div id="content">
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
          <a href="/google/statistic/">Google Docs Statistic</a> page for more
          information on how this works.
        </p>
      </div>
    </>
  );
};
