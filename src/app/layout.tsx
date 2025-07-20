import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Reef Condo - Atlantis Resort',
  description: 'Discover the perfect vacation experience at our luxury condo in Atlantis Resort. Explore on-resort activities, local attractions, and exciting excursions.',
  keywords: 'condo, resort, vacation, Atlantis, activities, excursions',
  openGraph: {
    title: 'Reef Condo - Atlantis Resort',
    description: 'Your perfect vacation destination with luxury accommodations and endless activities.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 