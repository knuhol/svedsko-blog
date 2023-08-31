import { client } from "@/tina/__generated__/client"
import { Home } from '@/components/Home'

const HomePage = async () => {
  const { data, query, variables } = await client.queries.page({
    relativePath: 'home.mdx',
  })

  return <Home data={data} query={query} variables={variables} />
}

export default HomePage
