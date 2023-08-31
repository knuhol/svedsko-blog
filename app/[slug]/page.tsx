import { client } from '../../tina/__generated__/client'
import { Page } from '../../components/Page'

const PagePage = async ({ params }) => {
  const { data, query, variables } = await client.queries.page({
    relativePath: `${params.slug}.mdx`,
  })

  return <Page data={data} query={query} variables={variables} />
}

export default PagePage
