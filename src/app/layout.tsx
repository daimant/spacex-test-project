import type { Metadata } from 'next'
import Navigation from '@/components/Navigation/Navigation'
import '@/assets/styles/globals.scss'

export const metadata: Metadata = {
  title: 'SpaceX Test Project',
  description: 'SpaceX landing page with interactive elements',
  icons: {
    icon: '/favicon.svg',
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
        <Navigation />
        {children}
      </body>
    </html>
  )
}
