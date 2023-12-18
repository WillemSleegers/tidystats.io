import { Section } from "@/components/Section";

export default () => {
  return (
    <>
      <Section gray>
        <img
          className="mx-auto"
          src="/assets/images/question.svg"
          alt="tips logo"
          style={{ width: 160, height: 160 }}
        />
      </Section>

      <main id="content">
        <h1 className="text-center">Frequenty Asked Questions</h1>
        <h2>Which versions of Word support the tidystats Word add-in?</h2>

        <ul>
          <li>Word on iPad</li>
          <li>Word on Mac (Microsoft 365)</li>
          <li>Word 2016 or later on Mac</li>
          <li>Word 2019 or later on Mac</li>
          <li>Word on the web</li>
          <li>Word 2016 or later on Windows</li>
          <li>Word 2019 or later on Windows</li>
          <li>Word on Windows (Microsoft 365)</li>
        </ul>

        <h2>How much does tidystats cost?</h2>
        <p>
          Both the tidystats R package and the Word add-in are completely free
          to use.
        </p>

        <h2>Does tidystats require an internet connection?</h2>
        <p>
          The R package only requires an internet connection when you install
          the package, just like any R package. The Microsoft Word add-in does
          require an internet connection because the add-in is technically a
          web-app that runs inside your document.
        </p>

        <h2>
          Does this mean that the tidystats Word add-in saves my data somewhere?
        </h2>
        <p>
          No. The Word add-in only retrieves information from the server when
          the add-in is opened. Once open, the add-in will perform all
          computations on your computer.
        </p>
        <p>
          For more privacy information, see the{" "}
          <a href="/privacy/">Privacy Statement</a>.
        </p>
      </main>
    </>
  );
};
