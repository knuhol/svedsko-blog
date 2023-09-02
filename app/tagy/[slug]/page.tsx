import { notFound } from 'next/navigation'

import { createTagMaps } from '@/app/tagSlugs'
import { client } from '@/tina/__generated__/client'
import { Tag } from '@/components/Tag'
import { getTags } from '@/utils/getTags'

export const generateStaticParams = async () => {
  const { slugToTagMap } = await createTagMaps()

  return Object.keys(slugToTagMap).map((slug) => {
    return { params: { slug } }
  })
}

// TODO: Metadata
const TagPage = async ({ params }) => {
  const { slugToTagMap, tagToSlugMap } = await createTagMaps()

  if (!Object.keys(slugToTagMap).includes(params.slug)) {
    notFound()
  }

  const posts = await client.queries.postConnection({
    last: -1,
    sort: 'date',
  })
  const authors = await client.queries.authorsConnection()

  return (
    <Tag
      authors={authors}
      posts={posts.data.postConnection.edges.filter(({ node }) =>
        getTags(node.tags).includes(slugToTagMap[params.slug]),
      )}
      tag={slugToTagMap[params.slug]}
      tagToSlugMap={tagToSlugMap}
      slugToTagMap={slugToTagMap}
    />
  )
}

export default TagPage
