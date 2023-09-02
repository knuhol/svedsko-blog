import { client } from '@/tina/__generated__/client'
import { Home } from '@/components/Home'
import siteConfig from '@/config/site.config.json'
import { createTagMaps } from '@/app/tagSlugs'

const HomePage = async () => {
  const posts = await client.queries.postConnection({
    last: siteConfig.postPerPage,
    sort: 'date',
  })
  const authors = await client.queries.authorsConnection()
  const { tagToSlugMap } = await createTagMaps()

  return <Home posts={posts} authors={authors} tagToSlugMap={tagToSlugMap} />
}

export default HomePage
