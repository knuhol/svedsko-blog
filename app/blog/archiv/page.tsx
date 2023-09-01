import { client } from '@/tina/__generated__/client'
import { Archive } from '@/components/Archive'

// TODO: Metadata
const ArchivePage = async () => {
  const posts = await client.queries.postConnection({
    last: -1,
    sort: 'date',
  })

  return <Archive posts={posts} />
}

export default ArchivePage
