import { GlobalContexProvider } from "./Context/store"
import '@/app/globals.css'

export const metadata = {
  title: 'Event Hall',
  description: 'Generated by Next.js',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <GlobalContexProvider>
          {children}
        </GlobalContexProvider>

      </body>
    </html>
  )
}
