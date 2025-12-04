import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'
import Image from "next/image";
import logo from "@/public/logo.png";


export const metadata: Metadata = {
  title: 'The Elder Ghrols',
  description: 'Fresh Pots since 3E 450',
  openGraph: {
    title: "The Elder Ghrols",
    description: "Fresh Pots since 3E 450",
    url: "https://elder-ghrols-blog.vercel.app/",
    siteName: "The Elder Ghrols",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Elder Ghrols",
    description: "Fresh Pots since 3E 450",
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
            <p>The Elder Ghrols - Fresh Pots since 4E 2025</p>
          </footer>
        </div>
      </body>
    </html>
  )
}


