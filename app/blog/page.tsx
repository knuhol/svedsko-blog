import type { Metadata } from 'next'

import { client } from '@/tina/__generated__/client'
import { Blog } from '@/components/Blog'
import siteConfig from '@/config/site.config.json'

export const metadata: Metadata = {
  title: `${siteConfig.metaData.title} – Blog`,
}

const BlogPage = async () => {
  const allPosts = await client.queries.postConnection({ sort: 'date', last: -1 })
  const numberOfPages = Math.ceil(
    allPosts.data.postConnection.edges.length / siteConfig.postPerPage,
  )

  const posts = await client.queries.postConnection({ sort: 'date', last: siteConfig.postPerPage })
  const authors = await client.queries.authorsConnection()

  return (
    <Blog
      posts={posts.data.postConnection.edges}
      authors={authors}
      numberOfPages={numberOfPages}
      currentPage={1}
    />
  )
}

export default BlogPage
