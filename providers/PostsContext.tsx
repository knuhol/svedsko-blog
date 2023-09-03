'use client'

import React from 'react'
import { TinaPost, TinaPosts } from '@/types/tina'

interface IPostsContext {
  posts: TinaPosts
  getPostBySlug: (slug: string) => TinaPost
}

const postsContextInitialValue: IPostsContext = {
  posts: [],
  getPostBySlug: () => ({
    cursor: '',
  }),
}

const PostsContext = React.createContext<IPostsContext>(postsContextInitialValue)

const PostsProvider = ({
  children,
  posts,
}: {
  children: React.ReactNode
  posts: TinaPosts
}): React.ReactElement => {
  const value: IPostsContext = {
    posts,
    getPostBySlug: (slug: string) => posts.find(({ node }) => node._sys.filename === slug),
  }

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
}

const usePosts = (): IPostsContext => React.useContext(PostsContext)

export { PostsContext, PostsProvider, usePosts }
