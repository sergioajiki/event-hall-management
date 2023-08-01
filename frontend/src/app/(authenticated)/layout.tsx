import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <h1> Event Hall </h1>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/events">All Events</Link></li>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/users">Usuários</Link></li>
          </ul>
        </nav>
        <hr />
      {children}  
      </body>
    </html>
  )
}
