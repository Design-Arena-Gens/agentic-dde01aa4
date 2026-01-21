import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Story of Humanity - A History Documentary',
  description: 'An interactive documentary exploring the greatest moments in human history',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
