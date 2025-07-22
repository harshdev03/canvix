import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Canvix",
  description: "A clean, minimal drawing canvas built for focused creativity.",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
