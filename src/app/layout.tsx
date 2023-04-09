import Navbar from "@/components/Navbar"
import "./globals.css"

export const metadata = {
  title: "tidystats",
  description:
    "The website of tidystats: A software tool to reproducibly report statistics.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
