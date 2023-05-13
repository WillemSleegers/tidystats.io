import { ReactNode } from "react"

type LinkProps = {
  href: string
  children: ReactNode
}

const Link = (props: LinkProps) => {
  const { href, children } = props

  return (
    <a className="font-semibold underline" href={href}>
      {children}
    </a>
  )
}

export default Link
