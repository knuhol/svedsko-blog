import Image from 'next/image'
import Link from 'next/link'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

import { formatDate } from '@/template/utils/formatDate'
import { readingTime } from '@/template/utils/readingTime'
import { truncateString } from '@/template/utils/truncateString'
import siteConfig from '@/config/site.config.json'
import {
  IconArrowUpRight,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandReddit,
  IconBrandTwitter,
  IconCalendarEvent,
  IconClock,
} from '@tabler/icons-react'
import { TemplateAuthors, TemplatePost } from '@/types/template'
import { richTextBodyToString } from '@/utils/richTextBodyToString'
import { getAuthorByName } from '@/utils/getAuthorByName'

interface Props {
  post: TemplatePost
  authors: TemplateAuthors
}

const Post = ({
  post: {
    slug,
    content,
    frontMatter: { title, image, date, author, tags },
  },
  authors,
}: Props) => {
  let pageUrl = `${siteConfig.baseURL.replace(/\/$|$/, '/')}blog/${slug}`
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
                    {authors.map((authorData, i) =>
                      author === authorData.name ? (
                        <span key={i}>
                          <Image src={authorData.image} alt={author} width="26" height="26" />
                        </span>
                      ) : (
                        ''
                      ),
                    )}
                    <i className="d-inline-block ms-2 ps-1 fst-normal">
                      {getAuthorByName({
                        authorName: author,
                        authors,
                      }).gender === 'male'
                        ? 'napsal'
                        : 'napsala'}{' '}
                      <span>{author}</span>
                    </i>
                  </Link>
                </li>
                <li className="list-inline-item mt-2">—</li>
                <li className="list-inline-item mt-2">
                  <i className="me-2">
                    <IconClock size={18} />
                  </i>
                  <span>přečtete za {readingTime(richTextBodyToString(content))} minut</span>
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
              <span className="d-inline-block mb-3 small">SDÍLET</span>
              <ul className="social-share icon-box">
                <li className="d-inline-block d-lg-block me-2 mb-2">
                  <a
                    href={`https://www.facebook.com/sharer.php?u=${pageUrl}&quote=${title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i>
                      <IconBrandFacebook size={18} />
                    </i>
                  </a>
                </li>
                <li className="d-inline-block d-lg-block me-2 mb-2">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${title}&url=${pageUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i>
                      <IconBrandTwitter size={18} />
                    </i>
                  </a>
                </li>
                <li className="d-inline-block d-lg-block me-2 mb-2">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i>
                      <IconBrandLinkedin size={18} />
                    </i>
                  </a>
                </li>
                <li className="d-inline-block d-lg-block me-2 mb-2">
                  <a
                    href={`https://www.reddit.com/submit?url=${pageUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i>
                      <IconBrandReddit size={18} />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 post-content-block order-0 order-lg-2">
            <div className="content">
              <TinaMarkdown content={content} />
            </div>
            <ul className="post-meta-tag list-unstyled list-inline mt-5">
              {tags.map((t, i) => (
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
                  {authors.map((authorData, i) =>
                    author === authorData.name ? (
                      <span key={i}>
                        <Image
                          src={authorData.image}
                          alt={author}
                          width="155"
                          height="155"
                          className="rounded mr-4 img-fluid"
                          placeholder="blur"
                          blurDataURL={authorData.image}
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
                  {authors.map((authorData, i) =>
                    author === authorData.name ? (
                      <div key={i}>{truncateString(authorData.summary, 150)}</div>
                    ) : (
                      ''
                    ),
                  )}
                  <div className="content">
                    <Link
                      href={`/author/${author.replace(/ /g, '-').toLowerCase()}`}
                      className="text-dark"
                    >
                      {getAuthorByName({
                        authorName: author,
                        authors,
                      }).gender === 'male'
                        ? 'Všechny články od tohoto autora'
                        : 'Všechny články od této autorky'}
                      <i>{<IconArrowUpRight size={20} />}</i>
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

export { Post }
