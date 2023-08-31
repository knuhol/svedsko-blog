import { type ReactNode } from 'react'
import { Crete_Round, Work_Sans } from 'next/font/google'

import '@/styles/globals.scss'
import '@/styles/bootstrap.scss'

const workSans = Work_Sans({ weight: ['500', '600'], display: 'swap', subsets: ['latin-ext'] })

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={workSans.className}>{children}</body>
    </html>
  )
}

export default RootLayout
