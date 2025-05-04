import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import './globals.css'

export const metadata: Metadata = {
  title: 'Royal Blue Crew | Professional Cleaning Services in Manhattan, NYC',
  description: 'Top-rated residential and commercial cleaning services in Manhattan. Royal Blue Crew offers reliable, eco-friendly cleaning for homes and offices. Get a free quote today!',

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster/>
      </body>
    </html>
  )
}
