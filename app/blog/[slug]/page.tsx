import type { Metadata } from 'next'
import { cache } from 'react'

import { client } from '@/tina/__generated__/client'
import { BlogPost } from '@/components/BlogPost'
import siteConfig from '@/config/site.config.json'
import { sharedOgMetadata } from '@/app/sharedOgMetadata'
import { notFound } from 'next/navigation'
import { slugify } from '@/utils/slugify'

const getCachedPost = cache(
  async (slug) =>
    await client.queries.post({
      relativePath: slug + '.mdx',
    }),
)

const getCachedSlugs = cache(async () => {
  const { data } = await client.queries.postConnection()

  return data.postConnection.edges.map((edge) => {
    return edge.node._sys.filename
  })
})

export const generateStaticParams = async () => {
  const slugs = await getCachedSlugs()

  return slugs.map((slug) => {
    return { params: { slug } }
  })
}

interface MetadataProps {
  params: { slug: string }
}

export const generateMetadata = async ({ params }: MetadataProps): Promise<Metadata> => {
  const slugs = await getCachedSlugs()

  if (!slugs.includes(params.slug)) {
    notFound()
  }

  const { data } = await getCachedPost(params.slug)

  return {
    title: `${siteConfig.metaData.title} – ${data.post.title}`,
    authors: { name: data.post.author, url: `/autori/${slugify(data.post.author)}` },
    description: data.post.summary,
    keywords: data.post.tags,
    openGraph: {
      ...sharedOgMetadata,
      title: data.post.title,
      images: [
        data.post.image === '/uploads/no-picture.svg' ? siteConfig.metaData.ogImage : data.post.image,
      ],
      url: `${siteConfig.baseURL}/blog/${params.slug}`,
      type: 'article',
      publishedTime: data.post.date,
      tags: data.post.tags,
      section: data.post.category,
      description: data.post.summary
    },
  }
}

const BlogPostPage = async ({ params }) => {
  const slugs = await getCachedSlugs()

  if (!slugs.includes(params.slug)) {
    notFound()
  }

  const post = await getCachedPost(params.slug)
  const authors = await client.queries.authorsConnection()

  return <BlogPost post={post} authors={authors} />
}

export default BlogPostPage
