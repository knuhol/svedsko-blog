'use client'

import { TinaAuthors, TinaPosts } from '@/types/tina'
import { Layout } from '@/components/Layout'
import { Blog as BlogTemplate } from '@/template/components/Blog'
import { getGender } from '@/utils/getGender'
import { getTags } from '@/utils/getTags'

interface Props {
  posts: TinaPosts['data']['postConnection']['edges']
  authors: TinaAuthors
  numberOfPages: number
  currentPage: number
}

const Blog = ({ posts, authors, numberOfPages, currentPage }: Props) => (
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
        },
      }))}
      currentPage={currentPage}
      numberOfPages={numberOfPages}
    />
  </Layout>
)

export { Blog }
