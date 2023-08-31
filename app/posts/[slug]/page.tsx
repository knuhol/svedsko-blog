import { client } from '../../../tina/__generated__/client'
import { Post } from '../../../components/Post'

export const generateStaticParams = async () => {
  const { data } = await client.queries.postConnection()

  return data.postConnection.edges.map((x) => {
    return { params: { slug: x.node._sys.filename } }
  })
}

const PostPage = async ({ params }) => {
  const { data, query, variables } = await client.queries.post({
    relativePath: params.slug + '.md',
  })
  return <Post data={data} query={query} variables={variables} />
}

export default PostPage
