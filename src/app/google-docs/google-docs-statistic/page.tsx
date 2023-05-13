import { Section } from "@/components/Section"
import { Alert } from "@/components/Alert"

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
        <h1 className="text-center py-3">tidystats Statistic</h1>

        <p>
          Each statistic inserted with the tidystats Google Docs add-in becomes
          a link. By turning each statistic into a link, we can identify all the
          statistics in the document and enable features such as automatic
          updating.
        </p>

        <p>
          It might look a bit weird that each statistic is a link, but this is
          unfortunately the only way for the add-in to have the important
          automatic updating functionality.
        </p>

        <Alert>
          If you want a statistic to remain updatable, make sure to keep the
          links in tact.
        </Alert>

        <p>
          There are few instances where you would want to remove the links from
          each statistic. For example, when you convert the document to a PDF or
          other document, or share the Google Docs with others. In this case, we
          recommend that you make a copy of the document and use the 'Remove
          tidystats links' menu option to remove all the tidystats statistics
          links in the document (this feature will soon be added).
        </p>
      </Section>
    </>
  )
}
