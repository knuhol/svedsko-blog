'use client'

import { useTina } from 'tinacms/dist/react'
import Link from 'next/link'

import { Layout } from './Layout'

const Posts = ({ query, variables, data }) => {
  const { data: tinaData } = useTina({
    query,
    variables,
    data,
  })
  const postsList = tinaData.postConnection.edges

  return (
    <Layout>
      <h1>Posts</h1>
      <div>
        {postsList.map((post) => (
          <div key={post.node.id}>
            <Link href={`/posts/${post.node._sys.filename}`}>{post.node.title}</Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export { Posts }
