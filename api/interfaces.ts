export interface PostInterface {
  id: number
  title: string
  headline: string
  body: string
  created_at: string
  tags: string[]
}

export interface CommentInterface {
  id: number
  created_at: string
  author: string
  body: string
}

export interface PostCommentsInterface {
  postId: number
  comments: CommentInterface[]
}
