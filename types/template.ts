import { type TinaMarkdownContent } from 'tinacms/dist/rich-text'

export type TemplatePosts = Array<{
  slug: string
  content: TinaMarkdownContent | TinaMarkdownContent[]
  frontMatter: {
    title: string
    description: string
    tags: string[]
    author: string
    date: string
    image: string
  }
}>
export type TemplateAuthors = Array<{
  image: string
  name: string
  gender: 'male' | 'female'
  content: TinaMarkdownContent | TinaMarkdownContent[]
  summary: string
}>

export type TemplatePost = TemplatePosts[number]
export type TemplateAuthor = TemplateAuthors[number]
