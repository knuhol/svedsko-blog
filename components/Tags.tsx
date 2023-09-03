'use client'

import type { TagMaps } from '@/app/tagSlugs'
import { Tags as TagsTemplate } from '@/template/components/Tags'
import { Layout } from '@/components/Layout'

interface Props {
  tagsWithPostsCountMap: TagMaps['tagsWithPostsCountMap']
}

const Tags = ({ tagsWithPostsCountMap }: Props) => (
  <Layout>
    <TagsTemplate tagsWithPostsCountMap={tagsWithPostsCountMap} />
  </Layout>
)

export { Tags }
