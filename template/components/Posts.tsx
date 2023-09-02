// credits: https://themeforest.net/item/qurno-minimal-blog-nextjs-template/36625633

import { PageHeader } from '@/template/components/PageHeader'
import siteConfig from '@/config/site.config.json'
import { BlogPostOverview } from '@/template/components/BlogPostOverview'
import type { TemplateAuthors, TemplatePost } from '@/types/template'
import type { TagMaps } from '@/app/tagSlugs'

interface Props {
  title: string
  posts: TemplatePost
  authors: TemplateAuthors
  tagToSlugMap: TagMaps['tagToSlugMap']
  slugToTagMap?: TagMaps['slugToTagMap']
}

const Posts = ({ title, posts, authors, tagToSlugMap, slugToTagMap }) => {
  return (
    <section>
      <PageHeader title={title} slugToTagMap={slugToTagMap} />
      <div className="container">
        <div className="row gy-5 gx-4 g-xl-5">
          {posts.map((post) => (
            <div
              key={post.slug}
              className={siteConfig.postColumns == 3 ? 'col-lg-4 col-md-6' : 'col-lg-6'}
            >
              <BlogPostOverview post={post} authors={authors} tagToSlugMap={tagToSlugMap} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Posts }
