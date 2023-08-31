import { client } from "@/tina/__generated__/client"
import { Posts } from "@/components/Posts"

// TODO: Transfer posts to blog
const PostsPage = async () => {
  const { data, query, variables } = await client.queries.postConnection()

  return <Posts data={data} query={query} variables={variables} />
}

export default PostsPage
