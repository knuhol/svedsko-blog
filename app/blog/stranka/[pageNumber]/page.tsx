import { notFound } from 'next/navigation'
import { cache } from 'react'

import { client } from '@/tina/__generated__/client'
import { Blog } from '@/components/Blog'
import siteConfig from '@/config/site.config.json'
import { createTagMaps } from '@/app/tagSlugs'
import { createCategoryMaps } from '@/app/categorySlugs'

export const generateStaticParams = async () => {
  const allPosts = await getCachedPosts()
  const numberOfPages = Math.ceil(
    allPosts.data.postConnection.edges.length / siteConfig.postPerPage,
  )
  const pageNumbers = new Array(numberOfPages).fill(null).map((_, index) => index + 1)

  return pageNumbers.map((pageNumber) => {
    return { params: { pageNumber: pageNumber.toString() } }
  })
}

// TODO: Metadata
const BlogPage = async ({ params }) => {
  const allPosts = await getCachedPosts()
  const numberOfPages = Math.ceil(
    allPosts.data.postConnection.edges.length / siteConfig.postPerPage,
  )

  if (params.pageNumber > numberOfPages) {
    return notFound()
  }

  const startIndex = siteConfig.postPerPage * (params.pageNumber - 1)
  const endIndex = startIndex + siteConfig.postPerPage
  const posts = allPosts.data.postConnection.edges.splice(startIndex, endIndex)

  const authors = await client.queries.authorsConnection()
  const { tagToSlugMap } = await createTagMaps()
  const { categoryToSlugMap } = await createCategoryMaps()

  return (
    <Blog
      posts={posts}
      authors={authors}
      numberOfPages={numberOfPages}
      currentPage={Number(params.pageNumber)}
      tagToSlugMap={tagToSlugMap}
      categoryToSlugMap={categoryToSlugMap}
    />
  )
}

// TODO: Is caching causing problems?
const getCachedPosts = cache(
  async () => await client.queries.postConnection({ sort: 'date', last: -1 }),
)

export default BlogPage
