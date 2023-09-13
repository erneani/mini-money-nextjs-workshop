import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './_components/header'
import Footer from './_components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mini Money Machine',
  description: 'A mini app for a quick NextJS workshop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen w-screen flex">
          <main className="h-1/3 w-1/2 m-auto border-4 border-black rounded-lg p-5 flex flex-col justify-between">
            <Header
              owner="Marietta"
              currentPage="Home"
              batteryPercentage={88}
            />
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  )
}
