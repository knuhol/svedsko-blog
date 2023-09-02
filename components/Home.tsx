'use client'

import { Layout } from '@/components/Layout'
import { Home as HomeTemplate } from '@/template/components/Home'
import { getTags } from '@/utils/getTags'
import type { TinaAuthors, TinaPosts } from '@/types/tina'
import { getGender } from '@/utils/getGender'
import type { TagMaps } from '@/app/tagSlugs'
import type { CategoryMaps } from '@/app/categorySlugs'

interface Props {
  posts: TinaPosts
  authors: TinaAuthors
  tagToSlugMap: TagMaps['tagToSlugMap']
  categoryToSlugMap: CategoryMaps['categoryToSlugMap']
}

const Home = ({ posts, authors, tagToSlugMap, categoryToSlugMap }: Props) => (
  <Layout>
    <HomeTemplate
      authors={authors.data.authorsConnection.edges.map(({ node }) => ({
        image: node.image,
        name: node.name,
        gender: getGender(node.gender),
        summary: node.summary,
        content: node.body,
      }))}
      posts={posts.data.postConnection.edges.map((post) => ({
        slug: post.node._sys.filename,
        content: post.node.body,
        frontMatter: {
          title: post.node.title,
          description: post.node.summary,
          tags: getTags(post.node.tags),
          author: post.node.author,
          date: post.node.date,
          image: post.node.image,
          category: post.node.category,
        },
      }))}
      tagToSlugMap={tagToSlugMap}
      categoryToSlugMap={categoryToSlugMap}
    />
  </Layout>
)

export { Home }
