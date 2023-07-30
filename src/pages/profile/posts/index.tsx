import { mock_posts } from './mock'
import { PostCard } from './post-card/PostCard'

export const Posts = () => {
  return (
    <div>
      {mock_posts.map((p) => (
        <PostCard key={p.id} {...p} />
      ))}
    </div>
  )
}
