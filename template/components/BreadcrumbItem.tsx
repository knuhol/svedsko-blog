import Link from 'next/link'
import { type ReactNode } from 'react'

interface Props {
  children: ReactNode | ReactNode[]
  href: string
  isCurrent: boolean
}

const BreadcrumbItem = ({ children, href, isCurrent, ...props }: Props) => {
  return (
    <li className="d-inline ms-3" {...props}>
      <Link href={href} passHref>
        {children}
      </Link>
    </li>
  )
}

export { BreadcrumbItem }
