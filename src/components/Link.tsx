import { ReactNode } from "react"

type LinkProps = {
  href: string
  children: ReactNode
}

export const Link = (props: LinkProps) => {
  const { href, children } = props

  return (
    <a className="font-semibold underline" href={href}>
      {children}
    </a>
  )
}
