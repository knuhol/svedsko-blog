'use client'

import type { TinaPosts } from '@/types/tina'
import { Layout } from '@/components/Layout'
import { Archive as ArchiveTemplate } from '@/template/components/Archive'

interface Props {
  posts: TinaPosts
}

const Archive = ({ posts }: Props) => (
  <Layout>
    <ArchiveTemplate
      posts={posts.data.postConnection.edges.map((post) => ({
        slug: post.node._sys.filename,
        content: post.node.body,
        frontMatter: {
          title: post.node.title,
          description: post.node.summary,
          tags: post.node.tags,
          author: post.node.author,
          date: post.node.date,
          image: post.node.image,
        },
      }))}
    />
  </Layout>
)

export { Archive }
