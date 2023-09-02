import 'server-only'

import { cache } from 'react'

import { client } from '@/tina/__generated__/client'
import { getTags } from '@/utils/getTags'
import { slugify } from '@/utils/slugify'

const getTagsWithPostsCount = cache(async () => {
  const posts = await client.queries.postConnection({
    last: -1,
    sort: 'date',
  })

  const allTags = posts.data.postConnection.edges.map(({ node }) => getTags(node.tags)).flat()
  const uniqueTags = [...new Set(allTags)]

  return uniqueTags.reduce(
    (result, tag) => ({
      ...result,
      [tag]: posts.data.postConnection.edges.filter(({ node }) => getTags(node.tags).includes(tag))
        .length,
    }),
    {},
  )
})

const flipObject = (data) =>
  Object.fromEntries(Object.entries(data).map(([key, value]) => [value, key]))

// TODO: Better types?
const createTagMaps = async () => {
  const tagsWithPostsCountMap: { [key: string]: string } = await getTagsWithPostsCount()
  const tagToSlugMap: { [key: string]: string } = Object.keys(tagsWithPostsCountMap).reduce(
    (result, tag) => ({
      ...result,
      [tag]: slugify(tag),
    }),
    {},
  )
  const slugToTagMap: { [key: string]: string } = flipObject(tagToSlugMap)

  return { tagsWithPostsCountMap, tagToSlugMap, slugToTagMap }
}

export type TagMaps = Awaited<ReturnType<typeof createTagMaps>>

export { createTagMaps }
