'use client'

import { Layout } from '@/components/Layout'
import type { TinaAuthor, TinaPosts } from '@/types/tina'
import { getGender } from '@/utils/getGender'
import { Author as AuthorTemplate } from '@/template/components/Author'
import { useTina } from 'tinacms/dist/react'

interface Props {
  author: TinaAuthor
  posts: TinaPosts
}

const Author = ({ author, posts }: Props) => {
  const { data: authorData } = useTina(author)

  return (
    <Layout>
      <AuthorTemplate
        author={{
          image: authorData.authors.image,
          name: authorData.authors.name,
          gender: getGender(authorData.authors.gender),
          summary: authorData.authors.summary,
          content: authorData.authors.body,
          numberOfPosts: posts.data.postConnection.edges.filter(
            (post) => post.node.author === authorData.authors.name,
          ).length,
          facebook: authorData.authors.facebook,
          linkedIn: authorData.authors.linkedin,
          gitHub: authorData.authors.github,
          stackOverflow: authorData.authors.stackoverflow,
          web: authorData.authors.web,
        }}
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
            category: post.node.category,
          },
        }))}
      />
    </Layout>
  )
}

export { Author }
