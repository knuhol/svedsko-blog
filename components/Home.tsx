'use client'

import { useTina } from 'tinacms/dist/react'

import { Layout } from '@/components/Layout'
import { Home as HomeTemplate } from '@/template/components/Home'
import { getTags } from '@/utils/getTags'
import { TinaAuthors, TinaPosts } from '@/types/tina'
import { getGender } from '@/utils/getGender'

interface Props {
  posts: TinaPosts
  authors: TinaAuthors
}

const Home = ({ posts, authors }: Props) => (
  <Layout>
    <HomeTemplate
      authors={authors.data.authorConnection.edges.map(({ node }) => ({
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
        },
      }))}
    />
  </Layout>
)

export { Home }
