import { client } from '@/tina/__generated__/client'
import { Authors } from '@/components/Authors'

// TODO: Metadata
const AuthorsPage = async () => {
  const posts = await client.queries.postConnection({
    last: -1,
    sort: 'date',
  })
  const authors = await client.queries.authorsConnection({ sort: 'name' })

  return <Authors posts={posts} authors={authors} />
}

export default AuthorsPage
