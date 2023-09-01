import { Fragment, Children, type ReactNode } from 'react'

interface Props {
  children: ReactNode | ReactNode[]
  blogPage: boolean
}

// TODO: Improve loading
const Breadcrumb = ({ children, blogPage }: Props) => {
  const childrenArray = Children.toArray(children)

  const childrenWithSeparator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return <Fragment key={index}>{child}</Fragment>
    }
    return child
  })

  return (
    <nav className="mb-4" aria-label="breadcrumb">
      <ul className={`list-inline breadcrumb-menu ${blogPage && 'blog-page-breadcrumb-menu'}`}>
        {childrenWithSeparator}
      </ul>
    </nav>
  )
}

export { Breadcrumb }
