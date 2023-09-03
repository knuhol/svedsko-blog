import { TemplateAuthor, TemplateAuthors } from '@/types/template'

const getAuthorByName = ({
  authorName,
  authors,
}: {
  authorName: string
  authors: TemplateAuthors
}): TemplateAuthor => authors.find(({ name }) => name === authorName)

export { getAuthorByName }
