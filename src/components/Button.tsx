type ButtonProps = {
  text: string
}

const Button = (props: ButtonProps) => {
  const { text } = props

  return (
    <button
      className="inline-block px-5 py-2.5 mb-1.5 text-white bg-light-blue hover:bg-light-blue-hover focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      role="button"
    >
      {text}
    </button>
  )
}

export default Button
