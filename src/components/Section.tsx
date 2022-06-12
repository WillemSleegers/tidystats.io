type SectionProps = {
  background?: string
  children: JSX.Element
}

const Section = ({ background, children }: SectionProps) => {
  return (
    <>
      <div
        className={
          background ? "section py-md-4 " + background : "section py-md-4"
        }
      >
        <div className="container">{children}</div>
      </div>
    </>
  )
}

export default Section
