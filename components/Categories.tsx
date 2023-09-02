'use client'

import { Categories as CategoriesTemplate } from '@/template/components/Categories'
import { Layout } from '@/components/Layout'
import type { CategoryMaps } from '@/app/categorySlugs'

interface Props {
  categoryToSlugMap: CategoryMaps['categoryToSlugMap']
  categoriesWithPostsCountMap: CategoryMaps['categoriesWithPostsCountMap']
}

const Categories = ({ categoryToSlugMap, categoriesWithPostsCountMap }: Props) => (
  <Layout>
    <CategoriesTemplate
      categoriesWithPostsCountMap={categoriesWithPostsCountMap}
      categoryToSlugMap={categoryToSlugMap}
    />
  </Layout>
)

export { Categories }
