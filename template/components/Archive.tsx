import { TemplatePosts } from '@/types/template'
import { IconArchive } from '@tabler/icons-react'
import Link from 'next/link'
import { PageHeaderBlock } from '@/template/components/PageHeader'

interface Props {
  posts: TemplatePosts
}

const Archive = ({ posts }) => {
  // formatDateByYear
  let formatDateByYear = (a) => {
    const longCsCZFormatter = new Intl.DateTimeFormat('cs-CZ', {
      year: 'numeric',
    })
    const date = new Date(a)
    return longCsCZFormatter.format(date)
  }

  // formatDateByMonth
  let formatDateByMonth = (a) => {
    const longCsCZFormatter = new Intl.DateTimeFormat('cs-CZ', {
      day: 'numeric',
      month: 'long',
    })
    const date = new Date(a)
    return longCsCZFormatter.format(date)
  }

  // sortByYear
  let postYear = posts.map((post) => formatDateByYear(post.frontMatter.date))
  const uniqueYear = [...new Set(postYear)]

  return (
    <section>
      <PageHeaderBlock title="Archiv článků" blogPage={false} />
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            {uniqueYear.map((unqYear) => (
              <div className="archive-block" key={unqYear.toString()}>
                <h2>
                  <>
                    <i>
                      <IconArchive size={80} />
                    </i>
                    {unqYear}
                  </>
                </h2>
                {posts.map((post, i) =>
                  formatDateByYear(post.frontMatter.date) === unqYear ? (
                    <div key={i} className="archive-post-item mb-3">
                      <span className="mx-0 d-inline-block" style={{ width: 120 + 'px' }}>
                        {formatDateByMonth(post.frontMatter.date)}
                      </span>
                      <span>•</span>
                      <Link href={`/blog/${post.slug}`}>{post.frontMatter.title}</Link>
                    </div>
                  ) : null,
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { Archive }
