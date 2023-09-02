import { Categories } from '@/components/Categories'
import { createCategoryMaps } from '@/app/categorySlugs'

// TODO: Metadata
const CategoriesPage = async () => {
  const { categoryToSlugMap, categoriesWithPostsCountMap } = await createCategoryMaps()

  return (
    <Categories
      categoryToSlugMap={categoryToSlugMap}
      categoriesWithPostsCountMap={categoriesWithPostsCountMap}
    />
  )
}

export default CategoriesPage
