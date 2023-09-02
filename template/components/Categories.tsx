// credits: https://themeforest.net/item/qurno-minimal-blog-nextjs-template/36625633

import Link from 'next/link'
import { IconTags } from '@tabler/icons-react'

import { PageHeader } from '@/template/components/PageHeader'
import { hashString } from '@/utils/hashString'
import siteConfig from '@/config/site.config.json'
import type { CategoryMaps } from '@/app/categorySlugs'
import { getTotalPostsText } from '@/utils/getTotalPostsText'

interface Props {
  categoryToSlugMap: CategoryMaps['categoryToSlugMap']
  categoriesWithPostsCountMap: CategoryMaps['categoriesWithPostsCountMap']
}

const Categories = ({ categoryToSlugMap, categoriesWithPostsCountMap }: Props) => {
  return (
    <section>
      <PageHeader title="Všechny kategorie" />

      <div className="container">
        <div className="row g-4 justify-content-center text-center">
          {Object.entries(categoriesWithPostsCountMap)
            .sort(([cat1], [cat2]) => cat1.localeCompare(cat2))
            .map(([cat, postsCount]) => (
              <div key={categoryToSlugMap[cat]} className="col-lg-4 col-md-6">
                <Link
                  href={`/kategorie/${categoryToSlugMap[cat]}`}
                  className={`p-4 rounded d-block is-hoverable tag-block ${
                    siteConfig.colorful && (hashString(cat) === 1 ? 'odd' : 'even')
                  }`}
                >
                  <i className="mt-1 mb-2 d-inline-block">
                    <IconTags size={30} />
                  </i>
                  <span className="h4 mt-2 mb-3 d-block">{cat}</span>
                  {getTotalPostsText(postsCount)}
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export { Categories }
