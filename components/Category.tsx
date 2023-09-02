'use client'

import type { TinaAuthors, TinaPosts } from '@/types/tina'
import { Layout } from '@/components/Layout'
import { Posts } from '@/template/components/Posts'
import { getTags } from '@/utils/getTags'
import { TagMaps } from '@/app/tagSlugs'
import { getGender } from '@/utils/getGender'
import type { CategoryMaps } from '@/app/categorySlugs'

interface Props {
  posts: TinaPosts['data']['postConnection']['edges']
  category: string
  authors: TinaAuthors
  slugToCategoryMap: CategoryMaps['slugToCategoryMap']
  tagToSlugMap: TagMaps['tagToSlugMap']
  categoryToSlugMap: CategoryMaps['categoryToSlugMap']
}

const Category = ({
  posts,
  category,
  authors,
  tagToSlugMap,
  slugToCategoryMap,
  categoryToSlugMap,
}: Props) => {
  const title = category[0].toUpperCase() + category.substring(1)

  return (
    <Layout>
      <Posts
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
        title={title}
        authors={authors.data.authorsConnection.edges.map(({ node }) => ({
          image: node.image,
          name: node.name,
          gender: getGender(node.gender),
          summary: node.summary,
          content: node.body,
        }))}
        slugToCategoryMap={slugToCategoryMap}
        tagToSlugMap={tagToSlugMap}
        categoryToSlugMap={categoryToSlugMap}
      />
    </Layout>
  )
}

export { Category }
