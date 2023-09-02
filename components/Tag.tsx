'use client'

import type { TinaAuthors, TinaPosts } from '@/types/tina'
import { Layout } from '@/components/Layout'
import { Posts } from '@/template/components/Posts'
import { getTags } from '@/utils/getTags'
import { TagMaps } from '@/app/tagSlugs'
import { getGender } from '@/utils/getGender'

interface Props {
  posts: TinaPosts['data']['postConnection']['edges']
  tag: string
  authors: TinaAuthors
  slugToTagMap: TagMaps['slugToTagMap']
  tagToSlugMap: TagMaps['tagToSlugMap']
}

const Tag = ({ posts, tag, authors, tagToSlugMap, slugToTagMap }: Props) => {
  const title = tag[0].toUpperCase() + tag.substring(1)

  return (
    <Layout>
      <Posts
        posts={posts.map((post) => ({
          slug: post.node._sys.filename,
          content: post.node.body,
          frontMatter: {
            title: post.node.title,
            description: post.node.summary,
            tags: getTags(post.node.tags),
            author: post.node.author,
            date: post.node.date,
            image: post.node.image,
          },
        }))}
        title={title}
        authors={authors.data.authorsConnection.edges.map(({ node }) => ({
          image: node.image,
          name: node.name,
          gender: getGender(node.gender),
          summary: node.summary,
          content: node.body,
        }))}
        slugToTagMap={slugToTagMap}
        tagToSlugMap={tagToSlugMap}
      />
    </Layout>
  )
}

export { Tag }
