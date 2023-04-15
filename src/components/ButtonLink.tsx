type ButtonLinkProps = {
  href: string
  text: string
}

const ButtonLink = (props: ButtonLinkProps) => {
  const { href, text } = props

  return (
    <a
      className="inline-block px-5 py-2.5 mb-1.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      href={href}
      role="button"
    >
      {text}
    </a>
  )
}

export default ButtonLink
