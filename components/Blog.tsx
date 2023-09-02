'use client'

import type { TinaAuthors, TinaPosts } from '@/types/tina'
import { Layout } from '@/components/Layout'
import { Blog as BlogTemplate } from '@/template/components/Blog'
import { getGender } from '@/utils/getGender'
import { getTags } from '@/utils/getTags'
import type { TagMaps } from '@/app/tagSlugs'
import type { CategoryMaps } from '@/app/categorySlugs'

interface Props {
  posts: TinaPosts['data']['postConnection']['edges']
  authors: TinaAuthors
  numberOfPages: number
  currentPage: number
  tagToSlugMap: TagMaps['tagToSlugMap']
  categoryToSlugMap: CategoryMaps['categoryToSlugMap']
}

const Blog = ({
  posts,
  authors,
  numberOfPages,
  currentPage,
  tagToSlugMap,
  categoryToSlugMap,
}: Props) => (
  <Layout>
    <BlogTemplate
      authors={authors.data.authorsConnection.edges.map(({ node }) => ({
        image: node.image,
        name: node.name,
        gender: getGender(node.gender),
        summary: node.summary,
        content: node.body,
      }))}
      posts={posts.map((post) => ({
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
      currentPage={currentPage}
      numberOfPages={numberOfPages}
      tagToSlugMap={tagToSlugMap}
      categoryToSlugMap={categoryToSlugMap}
    />
  </Layout>
)

export { Blog }
