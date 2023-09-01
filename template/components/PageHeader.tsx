// credits: https://themeforest.net/item/qurno-minimal-blog-nextjs-template/36625633

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import { BreadcrumbItem } from '@/template/components/BreadcrumbItem'
import { Breadcrumb } from '@/template/components/Breadcrumb'

type Breadcrumbs = Array<{
  href: string
  label: string
}>

const sanitizeBreadcrumbLabel = (string) => {
  const capitalisedString = string
    .split('-')
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1)
    })
    .join(' ')
  return capitalisedString.replace(/ri/g, 'ři')
}

const PageHeader = ({ title, blogPage = false }) => {
  const pathname = usePathname()
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumbs | undefined>()

  useEffect(() => {
    const pathWithoutQuery = pathname.split('?')[0]
    let pathArray = pathWithoutQuery.split('/')
    pathArray.shift()

    pathArray = pathArray.filter((path) => path !== '')

    const breadcrumbs = pathArray.map((path, index) => {
      const href = '/' + pathArray.slice(0, index + 1).join('/')
      return {
        href,
        label: sanitizeBreadcrumbLabel(path.charAt(0).toUpperCase() + path.slice(1)),
      }
    })

    setBreadcrumbs(breadcrumbs)
  }, [pathname])

  return (
    <>
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="section-title h2 mb-3">
                <span>{title}</span>
              </h1>

              <Breadcrumb blogPage={blogPage}>
                <BreadcrumbItem href="/">
                  <i
                    className="d-inline-block text-dark"
                    style={{ transform: 'translateY(-' + 2 + 'px)' }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <polyline points="5 12 3 12 12 3 21 12 19 12"></polyline>
                      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                      <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                    </svg>
                  </i>
                  <span className="ms-2">Domů</span>
                </BreadcrumbItem>
                {breadcrumbs &&
                  breadcrumbs.map((breadcrumb) => (
                    <BreadcrumbItem key={breadcrumb.href} href={breadcrumb.href}>
                      {breadcrumb.label}
                    </BreadcrumbItem>
                  ))}
              </Breadcrumb>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export { PageHeader }
