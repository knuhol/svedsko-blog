import Image from 'next/image'
import Link from 'next/link'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

import { formatDate } from '@/utils/formatDate'
import { readingTime } from '@/utils/readingTime'
import { truncateString } from '@/utils/truncateString'
import { IconCalendarEvent, IconClock } from '@tabler/icons-react'

const Post = ({
  post: {
    slug,
    content,
    frontMatter: { title, image, date, author, description, tags },
  },
  authors,
  postColumns,
}) => {
  return (
    <section className="section-sm pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="mb-5">
              <h3 className="h1 mb-4 post-title">{title}</h3>

              <ul className="card-meta list-inline mb-2">
                <li className="list-inline-item mt-2">
                  <Link
                    href={`/author/${author.replace(/ /g, '-').toLowerCase()}`}
                    className="card-meta-author"
                  >
                    {authors?.map((authorPage, i) =>
                      author.replace(/ /g, '-').toLowerCase() === authorPage.authorSlug ? (
                        <span key={i}>
                          <Image
                            src={authorPage.authorFrontMatter.image}
                            alt={author}
                            width="26"
                            height="26"
                          />
                        </span>
                      ) : (
                        ''
                      ),
                    )}
                    <i className="d-inline-block ms-2 ps-1 fst-normal">
                      by <span>{author}</span>
                    </i>
                  </Link>
                </li>
                <li className="list-inline-item mt-2">—</li>
                <li className="list-inline-item mt-2">
                  <i className="me-2">
                    <IconClock size={18} />
                  </i>
                  {/*<span>{readingTime(content)} min read</span>*/}
                </li>
                <li className="list-inline-item mt-2">—</li>
                <li className="list-inline-item mt-2">
                  <i className="me-2">
                    <IconCalendarEvent size={18} />
                  </i>
                  <span>{formatDate(date)}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="mb-5 text-center post-deatils-image">
              <Image
                className="rounded img-fluid"
                src={image}
                alt={title}
                width={`1120`}
                height={`595`}
                placeholder="blur"
                blurDataURL={image}
              />
            </div>
          </div>
          <div className="col-lg-2 post-share-block order-1 order-lg-0 mt-5 mt-lg-0">
            <div className="position-sticky" style={{ top: 150 + 'px' }}>
              <span className="d-inline-block mb-3 small">SHARE</span>
              {/*<ul className="social-share icon-box">*/}
              {/*  <li className="d-inline-block d-lg-block me-2 mb-2">*/}
              {/*    <a*/}
              {/*      href={`https://twitter.com/intent/tweet?text=${title}&url=${pageUrl}`}*/}
              {/*      target="_blank"*/}
              {/*      rel="noopener noreferrer"*/}
              {/*    >*/}
              {/*      <i>*/}
              {/*        <IconBrandTwitter size={18} />*/}
              {/*      </i>*/}
              {/*    </a>*/}
              {/*  </li>*/}
              {/*  <li className="d-inline-block d-lg-block me-2 mb-2">*/}
              {/*    <a*/}
              {/*      href={`https://www.facebook.com/sharer.php?u=${pageUrl}&quote=${title}`}*/}
              {/*      target="_blank"*/}
              {/*      rel="noopener noreferrer"*/}
              {/*    >*/}
              {/*      <i>*/}
              {/*        <IconBrandFacebook size={18} />*/}
              {/*      </i>*/}
              {/*    </a>*/}
              {/*  </li>*/}
              {/*  <li className="d-inline-block d-lg-block me-2 mb-2">*/}
              {/*    <a*/}
              {/*      href={`https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`}*/}
              {/*      target="_blank"*/}
              {/*      rel="noopener noreferrer"*/}
              {/*    >*/}
              {/*      <i>*/}
              {/*        <IconBrandLinkedin size={18} />*/}
              {/*      </i>*/}
              {/*    </a>*/}
              {/*  </li>*/}
              {/*  <li className="d-inline-block d-lg-block me-2 mb-2">*/}
              {/*    <a*/}
              {/*      href={`https://www.reddit.com/submit?url=${pageUrl}`}*/}
              {/*      target="_blank"*/}
              {/*      rel="noopener noreferrer"*/}
              {/*    >*/}
              {/*      <i>*/}
              {/*        <IconBrandReddit size={18} />*/}
              {/*      </i>*/}
              {/*    </a>*/}
              {/*  </li>*/}
              {/*  <li className="d-inline-block d-lg-block me-2 mb-2">*/}
              {/*    <a*/}
              {/*      href={`https://www.pinterest.com/pin/create/button/?&text=${title}&url=${pageUrl}&description=${title}`}*/}
              {/*      target="_blank"*/}
              {/*      rel="noopener noreferrer"*/}
              {/*    >*/}
              {/*      <i>*/}
              {/*        <IconBrandPinterest size={18} />*/}
              {/*      </i>*/}
              {/*    </a>*/}
              {/*  </li>*/}
              {/*</ul>*/}
            </div>
          </div>
          <div className="col-lg-8 post-content-block order-0 order-lg-2">
            <div className="content">
              <TinaMarkdown content={content} />
            </div>
            <ul className="post-meta-tag list-unstyled list-inline mt-5">
              <li className="list-inline-item">Tags:</li>
              {tags?.map((t, i) => (
                <li key={i} className="list-inline-item">
                  <Link
                    href={`/tags/${t.replace(/ /g, '-').toLowerCase()}`}
                    className="bg-white text-dark"
                  >
                    {t}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="single-post-author">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="d-block d-md-flex">
                <Link href={`/author/${author.replace(/ /g, '-').toLowerCase()}`}>
                  {authors?.map((authorPage, i) =>
                    author.replace(/ /g, '-').toLowerCase() === authorPage.authorSlug ? (
                      <span key={i}>
                        <Image
                          src={authorPage.authorFrontMatter.image}
                          alt={author}
                          width="155"
                          height="155"
                          className="rounded mr-4 img-fluid"
                          placeholder="blur"
                          blurDataURL={authorPage.authorFrontMatter.image}
                        />
                      </span>
                    ) : (
                      ''
                    ),
                  )}
                </Link>
                <div className="ms-0 ms-md-4 ps-0 ps-md-3 mt-4 mt-md-0">
                  <h3 className="h4 mb-3">
                    <Link
                      href={`/author/${author.replace(/ /g, '-').toLowerCase()}`}
                      className="text-dark"
                    >
                      {author}
                    </Link>
                  </h3>
                  {authors?.map((authorPage, i) =>
                    author.replace(/ /g, '-').toLowerCase() === authorPage.authorSlug ? (
                      <div key={i}>
                        <TinaMarkdown content={truncateString(authorPage.authorContent, 150)} />
                      </div>
                    ) : (
                      ''
                    ),
                  )}
                  <div className="content">
                    <Link
                      href={`/author/${author.replace(/ /g, '-').toLowerCase()}`}
                      className="text-dark"
                    >
                      See all posts by this author <i>{/*<IconArrowUpRight size={20} />*/}</i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Post
