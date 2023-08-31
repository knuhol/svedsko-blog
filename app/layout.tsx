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
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout
