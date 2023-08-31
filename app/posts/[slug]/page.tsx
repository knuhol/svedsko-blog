import type { Metadata, ResolvingMetadata } from 'next'

import { client } from '@/tina/__generated__/client'
import { Post } from '@/components/Post'
import siteConfig from '@/config/site.config.json'

export const generateStaticParams = async () => {
  const { data } = await client.queries.postConnection()

  return data.postConnection.edges.map((x) => {
    return { params: { slug: x.node._sys.filename } }
  })
}

interface MetadataProps {
  params: { slug: string }
}

export const generateMetadata = async (
  { params }: MetadataProps,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const { data, query, variables } = await client.queries.post({
    relativePath: params.slug + '.md',
  })

  // TODO: Add more
  return {
    title: `${siteConfig.metaData.title} – ${data.post.title}`,
    authors: { name: data.post.author }, // TODO: Add URL
    description: data.post.summary,
    keywords: data.post.tags,
    openGraph: {
      title: data.post.title,
      images: [data.post.image],
      url: `${siteConfig.baseURL}/${params.slug}`,
      type: 'article',
      publishedTime: data.post.date,
      tags: data.post.tags.split(', '),
      // TODO: Section?
    },
  }
}

const PostPage = async ({ params }) => {
  const { data, query, variables } = await client.queries.post({
    relativePath: params.slug + '.md',
  })

  return <Post data={data} query={query} variables={variables} />
}

export default PostPage
