import { client } from '@/tina/__generated__/client'

export type TinaPosts = Awaited<ReturnType<typeof client.queries.postConnection>>
export type TinaPost = Awaited<ReturnType<typeof client.queries.post>>
export type TinaAuthors = Awaited<ReturnType<typeof client.queries.authorsConnection>>
export type TinaAuthor = Awaited<ReturnType<typeof client.queries.authors>>

export type TinaPostNode = TinaPosts['data']['postConnection']['edges'][number]['node']
export type TinaAuthorNode = TinaAuthors['data']['authorsConnection']['edges'][number]['node']
