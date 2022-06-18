declare module "*.svg" {
  import { ReactElement, SVGProps } from "react"
  const content: (props: SVGProps<SVGElement>) => ReactElement
  export default content
}

declare module "*.png" {
  const content: string
  export default content
}

declare module "*.mp4" {
  const content: string
  export default content
}
