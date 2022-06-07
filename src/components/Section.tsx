type SectionProps = {
  background: string
  children: JSX.Element
}

const Section = ({ background, children }: SectionProps) => {
  return (
    <>
      <div className={"section " + background + " py-3"}>
        <div className="my-3 container">{children}</div>
      </div>
    </>
  )
}

export default Section
