import { type ReactNode } from 'react'
import { Metadata } from 'next'

import { Providers } from '@/app/providers'
import siteConfig from '@/config/site.config.json'

import '@/template/styles/bootstrap.scss'
import '@/template/styles/globals.scss'

export const metadata: Metadata = {
  title: siteConfig.metaData.title,
  keywords: siteConfig.metaData.keyword,
  authors: { name: siteConfig.metaData.author }, // TODO: Add URL
  description: siteConfig.metaData.description,
  openGraph: {
    images: [siteConfig.metaData.ogImage],
    url: siteConfig.baseURL,
    title: siteConfig.metaData.title,
    description: siteConfig.metaData.description,
    siteName: siteConfig.metaData.title,
    locale: 'cs_CZ',
    type: 'website',
  },
}

// TODO: Optimise fonts
const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Work+Sans:wght@500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout
