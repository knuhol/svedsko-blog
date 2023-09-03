import { Categories } from '@/components/Categories'
import { createCategoryMaps } from '@/app/categorySlugs'

// TODO: Metadata
const CategoriesPage = async () => {
  const { categoriesWithPostsCountMap } = await createCategoryMaps()

  return <Categories categoriesWithPostsCountMap={categoriesWithPostsCountMap} />
}

export default CategoriesPage
