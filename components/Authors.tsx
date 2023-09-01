'use client'

import { Layout } from '@/components/Layout'
import { TinaAuthors, TinaPosts } from '@/types/tina'
import { getGender } from '@/utils/getGender'
import { Authors as AuthorsTemplate } from '@/template/components/Authors'

interface Props {
  posts: TinaPosts
  authors: TinaAuthors
}

const Authors = ({ posts, authors }: Props) => (
  <Layout>
    <AuthorsTemplate
      authors={authors.data.authorsConnection.edges.map(({ node }) => ({
        image: node.image,
        name: node.name,
        gender: getGender(node.gender),
        summary: node.summary,
        content: node.body,
        numberOfPosts: posts.data.postConnection.edges.filter(
          (post) => post.node.author === node.name,
        ).length,
        slug: node._sys.filename,
      }))}
    />
  </Layout>
)

export { Authors }
