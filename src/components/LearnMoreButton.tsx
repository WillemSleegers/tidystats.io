import { Link } from "react-router-dom"

type LearnMoreButtonProps = {
  to: string
}

export default function LearnMoreButton({ to }: LearnMoreButtonProps) {
  return (
    <Link className="btn btn-primary btn-lg" to={to} role="button">
      Learn more
    </Link>
  )
}
