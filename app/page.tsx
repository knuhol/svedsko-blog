import { client } from "@/tina/__generated__/client"
import { Home } from '@/components/Home'

const HomePage = async () => {
  const posts = await client.queries.postConnection()
  const authors = await client.queries.authorConnection()

  return <Home posts={posts} authors={authors} />
}

export default HomePage
