import { ReactNode } from "react"

type SectionProps = {
  gray?: boolean
  children: ReactNode
}

export const Section = (props: SectionProps) => {
  const { gray, children } = props

  return (
    <div className={`${gray ? "bg-gray-100" : ""}`}>
      <div className="max-w-800 m-auto py-8 md:py-12 px-4 md:px-8">
        {children}
      </div>
    </div>
  )
}
