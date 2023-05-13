import { Section } from "@/components/Section"
import { Support } from "@/components/Support"

export default () => {
  return (
    <>
      <Section>
        <h1 className="text-center">Support</h1>
        <p>
          Do you have a question about tidystats or is something not working?
          Please check the Frequently Asked Questions (FAQ), tips & tricks, or
          contact me via Twitter or e-mail.
        </p>

        <Support />
      </Section>
    </>
  )
}
