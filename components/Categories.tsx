'use client'

import { Categories as CategoriesTemplate } from '@/template/components/Categories'
import { Layout } from '@/components/Layout'
import type { CategoryMaps } from '@/app/categorySlugs'

interface Props {
  categoriesWithPostsCountMap: CategoryMaps['categoriesWithPostsCountMap']
}

const Categories = ({ categoriesWithPostsCountMap }: Props) => (
  <Layout>
    <CategoriesTemplate categoriesWithPostsCountMap={categoriesWithPostsCountMap} />
  </Layout>
)

export { Categories }
