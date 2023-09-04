'use client'

import type { TinaAuthors, TinaPosts } from '@/types/tina'
import { Layout } from '@/components/Layout'
import { Posts } from '@/template/components/Posts'
import { TagMaps } from '@/app/tagSlugs'
import { getGender } from '@/utils/getGender'

interface Props {
  posts: TinaPosts['data']['postConnection']['edges']
  tag: string
  authors: TinaAuthors
  slugToTagMap: TagMaps['slugToTagMap']
}

const Tag = ({ posts, tag, authors, slugToTagMap }: Props) => {
  const title = tag[0].toUpperCase() + tag.substring(1)

  return (
    <Layout>
      <Posts
        posts={posts.map((post) => ({
          slug: post.node._sys.filename,
          content: post.node.body,
          frontMatter: {
            title: post.node.title,
            description: post.node.summary,
            tags: post.node.tags,
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
        slugToTagMap={slugToTagMap}
      />
    </Layout>
  )
}

export { Tag }
