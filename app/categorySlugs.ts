import 'server-only'

import { cache } from 'react'

import { client } from '@/tina/__generated__/client'
import { slugify } from '@/utils/slugify'

// TODO: Create together with tags to save fetches
const getCategoriesWithPostsCount = cache(async () => {
  const posts = await client.queries.postConnection()

  const allCategories = posts.data.postConnection.edges.map(({ node }) => node.category)
  const uniqueCategories = [...new Set(allCategories)]

  return uniqueCategories.reduce(
    (result, category) => ({
      ...result,
      [category]: posts.data.postConnection.edges.filter(({ node }) => node.category === category)
        .length,
    }),
    {},
  )
})

// TODO: Better types?
const createCategoryMaps = async () => {
  const categoriesWithPostsCountMap: { [key: string]: string } = await getCategoriesWithPostsCount()
  const slugToCategoryMap: { [key: string]: string } = Object.keys(
    categoriesWithPostsCountMap,
  ).reduce(
    (result, cat) => ({
      ...result,
      [slugify(cat)]: cat,
    }),
    {},
  )

  return { categoriesWithPostsCountMap, slugToCategoryMap }
}

export type CategoryMaps = Awaited<ReturnType<typeof createCategoryMaps>>

export { createCategoryMaps }
