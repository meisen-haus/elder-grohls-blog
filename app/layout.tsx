import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Chronicle',
  description: 'Tales and wisdom from distant realms',
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
            <Link href="/" className="logo">
              ⚔ The Chronicle ⚔
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
            <p>◆ The Chronicle ◆ Tales preserved for eternity ◆ Anno Domini 2025 ◆</p>
          </footer>
        </div>
      </body>
    </html>
  )
}


