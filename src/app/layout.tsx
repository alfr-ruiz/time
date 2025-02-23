import './globals.css'
import type { Metadata } from 'next'
import '@fontsource/ibm-plex-sans/300.css';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';
import '@fontsource/ibm-plex-sans/700.css';

export const metadata: Metadata = {
  title: "Alfredo's Timepieces | Luxury Watch Boutique",
  description: 'Discover our curated collection of exceptional timepieces, where craftsmanship meets sophistication.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, minHeight: '100vh' }}>{children}</body>
    </html>
  )
}
