'use client'

import type { TagMaps } from '@/app/tagSlugs'
import { Tags as TagsTemplate } from '@/template/components/Tags'
import { Layout } from '@/components/Layout'

interface Props {
  tagToSlugMap: TagMaps['tagToSlugMap']
  tagsWithPostsCountMap: TagMaps['tagsWithPostsCountMap']
}

const Tags = ({ tagToSlugMap, tagsWithPostsCountMap }: Props) => (
  <Layout>
    <TagsTemplate tagsWithPostsCountMap={tagsWithPostsCountMap} tagToSlugMap={tagToSlugMap} />
  </Layout>
)

export { Tags }
