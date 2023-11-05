import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {NavBar} from './Components';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Learn more',
  description: 'Explore insightful articles and broaden your knowledge with Learn More, your go-to source for diverse topics and expert insights.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        {children}
        </body>
    </html>
  )
}
