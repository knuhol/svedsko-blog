import { client } from '@/tina/__generated__/client'
import { Home } from '@/components/Home'
import siteConfig from '@/config/site.config.json'

const HomePage = async () => {
  const posts = await client.queries.postConnection({
    last: siteConfig.postPerPage,
    sort: 'date',
  })
  const authors = await client.queries.authorConnection()

  return <Home posts={posts} authors={authors} />
}

export default HomePage
