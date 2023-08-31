'use client'

import { useTina } from 'tinacms/dist/react'
import TemplatePost from '@/components/template/Post'

import { Layout } from './Layout'

const Post = ({ query, variables, data }) => {
  const { data: tinaData } = useTina({
    query,
    variables,
    data,
  })

  return (
    <Layout>
      <TemplatePost
        post={{
          slug: data.post.slug,
          frontMatter: {
            title: data.post.title,
            date: data.post.date,
            author: data.post.author,
            description: data.post.summary,
            tags: data.post.tags.split(', '),
            image: data.post.image,
          },
          content: tinaData.post.body,
        }}
      />
    </Layout>
  )
}

export { Post }
