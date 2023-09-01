import { type TinaMarkdownContent } from 'tinacms/dist/rich-text'

const richTextBodyToString = (body: TinaMarkdownContent | TinaMarkdownContent[]) =>
  JSON.stringify(body)

export { richTextBodyToString }
