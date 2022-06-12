type PreProps = {
  children: JSX.Element
}

const Pre = ({ children }: PreProps) => {
  return <pre className="bg-light p-3">{children}</pre>
}

export default Pre
