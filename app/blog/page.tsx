import { client } from '@/tina/__generated__/client'
import { Blog } from '@/components/Blog'
import siteConfig from '@/config/site.config.json'
import { createTagMaps } from '@/app/tagSlugs'

// TODO: Metadata
const BlogPage = async () => {
  const allPosts = await client.queries.postConnection({ sort: 'date', last: -1 })
  const numberOfPages = Math.ceil(
    allPosts.data.postConnection.edges.length / siteConfig.postPerPage,
  )

  const posts = await client.queries.postConnection({ sort: 'date', last: siteConfig.postPerPage })
  const authors = await client.queries.authorsConnection()
  const { tagToSlugMap } = await createTagMaps()

  return (
    <Blog
      posts={posts.data.postConnection.edges}
      authors={authors}
      numberOfPages={numberOfPages}
      currentPage={1}
      tagToSlugMap={tagToSlugMap}
    />
  )
}

export default BlogPage
