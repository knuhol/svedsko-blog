'use client'

import { tinaField, useTina } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

import { Layout } from './Layout'

const Page = ({ query, variables, data }) => {
  const { data: tinaData } = useTina({
    query,
    variables,
    data,
  })

  const content = tinaData.page.body
  return (
    <Layout>
      <div data-tina-field={tinaField(tinaData.page, 'body')}>
        <TinaMarkdown content={content} />
      </div>
    </Layout>
  )
}

export { Page }
