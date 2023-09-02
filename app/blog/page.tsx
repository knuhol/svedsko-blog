import { client } from '@/tina/__generated__/client'
import { Blog } from '@/components/Blog'
import siteConfig from '@/config/site.config.json'
import { createTagMaps } from '@/app/tagSlugs'
import { createCategoryMaps } from '@/app/categorySlugs'

// TODO: Metadata
const BlogPage = async () => {
  const allPosts = await client.queries.postConnection({ sort: 'date', last: -1 })
  const numberOfPages = Math.ceil(
    allPosts.data.postConnection.edges.length / siteConfig.postPerPage,
  )

  const posts = await client.queries.postConnection({ sort: 'date', last: siteConfig.postPerPage })
  const authors = await client.queries.authorsConnection()
  const { tagToSlugMap } = await createTagMaps()
  const { categoryToSlugMap } = await createCategoryMaps()

  return (
    <Blog
      posts={posts.data.postConnection.edges}
      authors={authors}
      numberOfPages={numberOfPages}
      currentPage={1}
      tagToSlugMap={tagToSlugMap}
      categoryToSlugMap={categoryToSlugMap}
    />
  )
}

export default BlogPage
