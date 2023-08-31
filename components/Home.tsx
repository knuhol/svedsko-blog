'use client'

import { tinaField, useTina } from 'tinacms/dist/react'
import Link from 'next/link'
import { IconNewSection } from '@tabler/icons-react'
// import { TinaMarkdown } from 'tinacms/dist/rich-text'

import { Layout } from '@/components/Layout'
import { BannerBlock } from '@/template/Components/Banner'
import siteConfig from '@/config/site.config.json'
import { PostHorizontal } from '@/template/Components/PostHorizontal'
import { PostVertical } from '@/template/Components/PostVertical'

const Home = ({ posts, authors }) => {
  const { data: postsData } = useTina(posts)
  const { data: authorsData } = useTina(authors)
  const postsList = postsData.postConnection.edges
  const authorsList = authorsData.authorConnection.edges

  // TODO: Cleanup
  // TODO: Add authors
  return (
    <Layout>
      <BannerBlock text={siteConfig.metaData.description} />

      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="section-title">
              <span>Nejnovější články</span>
            </h2>
          </div>
        </div>
        <div className="row gy-5 gx-4 g-xl-5">
          {postsList.map((post, i) => (
            <div key={i} className={siteConfig.postColumns == 3 ? 'col-lg-4 col-md-6' : 'col-lg-6'}>
              <PostVertical
                post={{
                  slug: post.node.slug,
                  content: JSON.stringify(post.node.body),
                  frontMatter: {
                    title: post.node.title,
                    description: post.node.summary,
                    tags: post.node.tags.split(', '),
                    author: post.node.author,
                    date: post.node.date,
                    image: post.node.image,
                  },
                }}
                authors={authorsList.map(({ node }) => ({
                  image: node.image,
                  name: node.name,
                }))}
                postColumns={siteConfig.postColumns}
              />
            </div>
          ))}

          <div className="col-12 text-center">
            <Link href={`/blog`} className="btn btn-primary mt-5" aria-label="View all posts">
              <i className="me-2">
                <IconNewSection size={16} />
              </i>
              Zobrazit všechny články
            </Link>
          </div>
        </div>
      </div>
      {/*<div data-tina-field={tinaField(tinaData.page, 'body')}>*/}
      {/*  <TinaMarkdown content={content} />*/}
      {/*</div>*/}
    </Layout>
  )
}

export { Home }
