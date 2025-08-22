import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Adey Threads - Premium Habesha Fashion',
  description: 'Discover the heritage and quality of Adey Threads. Premium Habesha fashion that celebrates culture and craftsmanship. Join our waitlist for exclusive access.',
  keywords: 'Adey Threads, Habesha fashion, Eritrean clothing, Ethiopian fashion, cultural wear, premium textiles',
  authors: [{ name: 'Adey Threads' }],
  creator: 'Adey Threads',
  publisher: 'Adey Threads',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://adeythreads.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Adey Threads - Premium Habesha Fashion',
    description: 'Discover the heritage and quality of Adey Threads. Premium Habesha fashion that celebrates culture and craftsmanship.',
    url: 'https://adeythreads.com',
    siteName: 'Adey Threads',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Adey Threads - Premium Habesha Fashion',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adey Threads - Premium Habesha Fashion',
    description: 'Discover the heritage and quality of Adey Threads. Premium Habesha fashion that celebrates culture and craftsmanship.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1a1a1a" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <GoogleAnalytics />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
