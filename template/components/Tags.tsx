// credits: https://themeforest.net/item/qurno-minimal-blog-nextjs-template/36625633

import Link from 'next/link'
import { IconTags } from '@tabler/icons-react'

import type { TagMaps } from '@/app/tagSlugs'
import { PageHeader } from '@/template/components/PageHeader'
import { hashTag } from '@/utils/hashTag'
import siteConfig from '@/config/site.config.json'

interface Props {
  tagToSlugMap: TagMaps['tagToSlugMap']
  tagsWithPostsCountMap: TagMaps['tagsWithPostsCountMap']
}

const Tags = ({ tagToSlugMap, tagsWithPostsCountMap }: Props) => {
  return (
    <section>
      <PageHeader title="Všechny tagy" />

      <div className="container">
        <div className="row g-4 justify-content-center text-center">
          {Object.entries(tagsWithPostsCountMap)
            .sort(([tag1], [tag2]) => tag1.localeCompare(tag2))
            .map(([tag, postsCount]) => (
              <div key={tagToSlugMap[tag]} className="col-lg-4 col-md-6">
                <Link
                  href={`/tagy/${tagToSlugMap[tag]}`}
                  className={`p-4 rounded d-block is-hoverable tag-block ${
                    siteConfig.colorful && (hashTag(tag) === 1 ? 'odd' : 'even')
                  }`}
                >
                  <i className="mt-1 mb-2 d-inline-block">
                    <IconTags size={30} />
                  </i>
                  <span className="h4 mt-2 mb-3 d-block">{tag}</span>
                  Total {postsCount} posts
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export { Tags }
