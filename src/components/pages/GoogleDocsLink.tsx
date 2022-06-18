import Section from "../Section"

import LogoGoogleDocs from "../LogoGoogleDocs"

export default function GoogleDocsLink() {
  return (
    <>
      <Section background="bg-light">
        <div className="py-2 text-center">
          <LogoGoogleDocs width="160" height="160" />
        </div>
      </Section>

      <div className="container-md my-md-4">
        <h1 className="text-center py-3">tidystats and Google Docs</h1>

        <p>
          You likely ended up here by clicking on a citation created by{" "}
          tidystats in a Google Doc.
        </p>

        <p>
          All statistics inserted via tidystats in Google Docs are tagged with a
          hyperlink. This hyperlink contains the identifier of the given
          statistic. It is thanks to this identifier that the statistic remains
          updatable: when you upload a new file with changed statistical values
          for the same test, all tagged values will be updated with the
          corresponding new values (if any).
        </p>

        <p className="alert alert-danger">
          If you want the values to remain updatable, keep the link intact!
        </p>
        <p>
          If you no longer wish for the statistics to be updatable, you can
          freely remove the links.
        </p>
      </div>
    </>
  )
}
