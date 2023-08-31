import Image from 'next/image'
import Link from 'next/link'
import { IconCalendarEvent, IconClock } from '@tabler/icons-react'

import { formatDate } from '@/template/utils/formatDate'
import { readingTime } from '@/template/utils/readingTime'

// TODO: Number of tags
// TODO: Rename this
const PostVertical = ({
  post: {
    slug,
    content,
    frontMatter: { title, image, date, author, description, tags },
  },
  authors,
  postColumns,
}) => {
  console.log(author.replace(/ /g, '-').toLowerCase(), authors)
  return (
    <article
      className={`card post-card h-100 border-0 bg-transparent ${
        postColumns == 3 ? 'post-card-col-4' : ''
      }`}
    >
      <div className="card-body">
        <Link href={`/posts/${slug}`} className="d-block" title={title}>
          <div className="post-image position-relative">
            <Image
              className="rounded img-fluid"
              src={image}
              alt={title}
              width={`650`}
              height={`335`}
              placeholder="blur"
              blurDataURL={image}
            />
          </div>
        </Link>

        <ul className="card-meta list-inline mb-3">
          <li className="list-inline-item mt-2">
            <i className="me-2">
              <IconCalendarEvent size={18} />
            </i>
            <span>{formatDate(date)}</span>
          </li>
          <li className="list-inline-item mt-2">—</li>
          <li className="list-inline-item mt-2">
            <i className="me-2">
              <IconClock size={18} />
            </i>
            <span>přečtete za {readingTime(content)}</span>
          </li>
        </ul>

        <Link href={`/posts/${slug}`} className="d-block" title={title}>
          <h3 className={`post-title mb-3 ${postColumns == 3 ? 'h4' : ''}`}>{title}</h3>
        </Link>
        <p className={postColumns == 3 ? 'small' : ''}>
          {description}
        </p>
      </div>
      <div className="card-footer border-top-0 bg-transparent p-0">
        <ul className="card-meta list-inline">
          <li className="list-inline-item mt-2">
            <Link
              href={`/author/${author.replace(/ /g, '-').toLowerCase()}`}
              className="card-meta-author"
              title={`Read all posts by - ${author}`}
            >
              {authors.map(
                (authorPage, i) =>
                  author === authorPage.name && (
                    <span key={i}>
                      <Image
                        src={authorPage.image}
                        alt={author}
                        width="26"
                        height="26"
                      />
                    </span>
                  ),
              )}
              <i className="d-inline-block ms-2 ps-1 fst-normal">
                {author === 'Knut Holm' ? 'napsal' : 'napsala'} <span>{author.split(' ')[0]}</span>
              </i>
            </Link>
          </li>
          <li className="list-inline-item mt-2 text-dark">•</li>
          <li className="list-inline-item mt-2">
            <ul className="card-meta-tag list-inline">
              {tags.slice(0,4).map((t, i) => (
                <li key={i} className="list-inline-item small">
                  <Link href={`/tags/${t.replace(/ /g, '-').toLowerCase()}`}>{t}</Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </article>
  )
}

export { PostVertical }
