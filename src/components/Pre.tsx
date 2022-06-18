type PreProps = {
  children: JSX.Element
}

export default function Pre({ children }: PreProps) {
  return <pre className="bg-light p-3">{children}</pre>
}
