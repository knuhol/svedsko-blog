import 'server-only'

import { cache } from 'react'

import { client } from '@/tina/__generated__/client'
import { slugify } from '@/utils/slugify'

const getTagsWithPostsCount = cache(async () => {
  const posts = await client.queries.postConnection()

  const allTags = posts.data.postConnection.edges.map(({ node }) => node.tags).flat()
  const uniqueTags = [...new Set(allTags)]

  return uniqueTags.reduce(
    (result, tag) => ({
      ...result,
      [tag]: posts.data.postConnection.edges.filter(({ node }) => node.tags.includes(tag))
        .length,
    }),
    {},
  )
})

// TODO: Better types?
const createTagMaps = async () => {
  const tagsWithPostsCountMap: { [key: string]: string } = await getTagsWithPostsCount()
  const slugToTagMap: { [key: string]: string } = Object.keys(tagsWithPostsCountMap).reduce(
    (result, tag) => ({
      ...result,
      [slugify(tag)]: tag,
    }),
    {},
  )

  return { tagsWithPostsCountMap, slugToTagMap }
}

export type TagMaps = Awaited<ReturnType<typeof createTagMaps>>

export { createTagMaps }
