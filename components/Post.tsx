'use client'

import { useTina } from 'tinacms/dist/react'

import { Layout } from './Layout'

const Post = ({ query, variables, data }) => {
  const { data: tinaData } = useTina({
    query,
    variables,
    data,
  })

  return (
    <Layout>
      <code>
        <pre
          style={{
            backgroundColor: 'lightgray',
          }}
        >
          {JSON.stringify(tinaData.post, null, 2)}
        </pre>
      </code>
    </Layout>
  )
}

export { Post }
