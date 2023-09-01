'use client'

import { BlogPost as TemplatePost } from '@/template/components/BlogPost'
import { TinaAuthors, TinaPost } from '@/types/tina'
import { richTextBodyToString } from '@/utils/richTextBodyToString'
import { getGender } from '@/utils/getGender'
import { Layout } from '@/components/Layout'
import { useTina } from 'tinacms/dist/react'

interface Props {
  post: TinaPost
  authors: TinaAuthors
}

const BlogPost = ({ post, authors }: Props) => {
  const { data: postData } = useTina(post)

  return (
    <Layout>
      <TemplatePost
        post={{
          slug: postData.post._sys.filename,
          frontMatter: {
            title: `${postData.post.title}`,
            date: postData.post.date,
            author: postData.post.author,
            tags: postData.post.tags.split(', '),
            image: postData.post.image,
            description: richTextBodyToString(postData.post.body),
          },
          content: postData.post.body,
        }}
        authors={authors.data.authorsConnection.edges.map((author) => ({
          name: author.node.name,
          image: author.node.image,
          gender: getGender(author.node.gender),
          summary: author.node.summary,
          content: author.node.body,
        }))}
      />
    </Layout>
  )
}

export { BlogPost }
