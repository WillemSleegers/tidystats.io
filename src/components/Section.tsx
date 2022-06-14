type SectionProps = {
  background?: string
  children: JSX.Element
}

export default function Section({ background, children }: SectionProps) {
  return (
    <>
      <div
        className={
          background ? "section py-md-4 " + background : "section py-md-4"
        }
      >
        <div className="container-md">{children}</div>
      </div>
    </>
  )
}
