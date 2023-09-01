import { client } from '@/tina/__generated__/client'

export type TinaPosts = Awaited<ReturnType<typeof client.queries.postConnection>>
export type TinaPost = Awaited<ReturnType<typeof client.queries.post>>
export type TinaAuthors = Awaited<ReturnType<typeof client.queries.authorConnection>>

export type TinaPostNode = TinaPosts['data']['postConnection']['edges'][number]['node']
export type TinaAuthorNode = TinaAuthors['data']['authorConnection']['edges'][number]['node']
