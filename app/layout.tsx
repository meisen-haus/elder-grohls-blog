import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'
import Image from "next/image";
import logo from "@/public/logo.png";
import { convertDatesToNerd } from '@/lib/era-dates'

const dateObj = new Date()
const realDate = dateObj.toLocaleDateString('en-US', { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})
const freshPotsSince = convertDatesToNerd(dateObj)

export const metadata: Metadata = {
  title: 'The Elder Ghrols',
  description: `Fresh Pots brewed ${freshPotsSince}`,
  openGraph: {
    title: "The Elder Ghrols",
    description: `Fresh Pots brewed ${freshPotsSince}`,
    url: "https://elder-ghrols-blog.vercel.app/",
    siteName: "The Elder Ghrols",
    images: [
      {
        url: "/og.jpg",
        width:1024,
        height: 536,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Elder Ghrols",
    description: `Fresh Pots brewed ${freshPotsSince}`,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="header">
            <Link href="/" >
              <Image
                src={logo}
                alt="We're watching you scum!"
                title="We're watching you scum!"
                className="logo"
                height={800}
                width={800}
              />
            </Link>
            <nav className="nav">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/about" className="nav-link">About</Link>
            </nav>
          </header>
          <main className="main">
            {children}
          </main>
          <footer className="footer">
            <p>The Elder Ghrols - Fresh Pots brewed
              <span title={`${realDate}`}> {freshPotsSince}</span>
            </p>
          </footer>
        </div>
      </body>
    </html>
  )
}


