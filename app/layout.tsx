import { type ReactNode } from 'react'
import { Metadata } from 'next'
import { Crete_Round, Work_Sans } from 'next/font/google'
import Script from 'next/script'

import { BootstrapProvider } from '@/providers/BootstrapProvider'
import siteConfig from '@/config/site.config.json'
import { sharedOgMetadata } from '@/app/sharedOgMetadata'

import '@/template/styles/bootstrap.scss'
import '@/template/styles/globals.scss'

export const metadata: Metadata = {
  title: siteConfig.metaData.title,
  keywords: siteConfig.metaData.keyword,
  authors: { name: siteConfig.metaData.author, url: siteConfig.metaData.authorWeb },
  description: siteConfig.metaData.description,
  openGraph: { ...sharedOgMetadata },
}

const creteRound = Crete_Round({
  weight: ['400'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-crete-round',
})
const workSans = Work_Sans({
  weight: ['500', '600'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-work-sans',
})

const RootLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <html
      lang="en"
      className={`${creteRound.variable} ${workSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-9HMLFFSQPP" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-9HMLFFSQPP');
          `}
        </Script>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <BootstrapProvider>{children}</BootstrapProvider>
      </body>
    </html>
  )
}

export default RootLayout
