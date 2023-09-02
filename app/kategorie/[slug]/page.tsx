import { notFound } from 'next/navigation'

import { client } from '@/tina/__generated__/client'
import { Category } from '@/components/Category'
import { createCategoryMaps } from '@/app/categorySlugs'
import { createTagMaps } from '@/app/tagSlugs'

export const generateStaticParams = async () => {
  const { slugToCategoryMap } = await createCategoryMaps()

  return Object.keys(slugToCategoryMap).map((slug) => {
    return { params: { slug } }
  })
}

// TODO: Metadata
const CategoryPage = async ({ params }) => {
  const { slugToCategoryMap, categoryToSlugMap } = await createCategoryMaps()

  if (!Object.keys(slugToCategoryMap).includes(params.slug)) {
    notFound()
  }

  const posts = await client.queries.postConnection({
    last: -1,
    sort: 'date',
  })
  const authors = await client.queries.authorsConnection()
  const { tagToSlugMap } = await createTagMaps()

  return (
    <Category
      authors={authors}
      posts={posts.data.postConnection.edges.filter(
        ({ node }) => node.category === slugToCategoryMap[params.slug],
      )}
      category={slugToCategoryMap[params.slug]}
      tagToSlugMap={tagToSlugMap}
      slugToCategoryMap={slugToCategoryMap}
      categoryToSlugMap={categoryToSlugMap}
    />
  )
}

export default CategoryPage
