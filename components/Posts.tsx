'use client'

import { useTina } from 'tinacms/dist/react'
import Link from 'next/link'

import { Layout } from './Layout'

const Posts = ({ authors, posts, currentPage, numberOfPages }) => {
  return (
    <Layout metaTitle="All Posts">
      <PageHeaderBlock title="All posts" blogPage={true} />

      <div className="container">
        <div className="row gy-5 gx-4 g-xl-5">
          {(
              <div
                key={i}
                className={postConfig.postColumns == 3 ? 'col-lg-4 col-md-6' : 'col-lg-6'}
              >
                <Post post={post} authors={authors} postColumns={postConfig.postColumns} />
              </div>
            ),
          )}

          <Pagination currentPage={currentPage} numberOfPages={numberOfPages} />
        </div>
      </div>
    </Layout>
  )
}

export { Posts }
