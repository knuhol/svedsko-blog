// credits: https://themeforest.net/item/qurno-minimal-blog-nextjs-template/36625633

import Link from 'next/link'

interface Props {
  currentPage: number
  numberOfPages: number
}

// TODO: Display on mobile?
const Pagination = ({ currentPage, numberOfPages }: Props) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numberOfPages

  if (numberOfPages === 1) return <></>

  return (
    <>
      <div className="col-12">
        <nav className="text-center mt-5">
          <ul className="pagination justify-content-center border border-white rounded d-inline-flex">
            <li className={`page-item ${isFirst ? 'disabled' : ''}`}>
              <Link
                href={`/blog/stranka/${currentPage - 1}`}
                className="page-link rounded w-auto px-4"
                aria-label="Pagination Arrow"
              >
                {`<`}
              </Link>
            </li>

            {Array.from({ length: numberOfPages }, (_, i) => (
              <li key={i} className={`page-item ${i == currentPage - 1 ? 'active' : ''}`}>
                <Link
                  href={`/blog/stranka/${i + 1}`}
                  key={`page-${i}`}
                  className="page-link rounded"
                >
                  {i + 1}
                </Link>
              </li>
            ))}

            <li className={`page-item ${isLast ? 'disabled' : ''}`}>
              <Link
                href={`/blog/stranka/${currentPage + 1}`}
                className="page-link rounded w-auto px-4"
                aria-label="Pagination Arrow"
              >
                {`>`}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export { Pagination }
