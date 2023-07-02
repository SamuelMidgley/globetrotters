import { PostCard } from './PostCard'
import { subDays } from 'date-fns'
import { Timeline } from './Timeline'

interface IProfile {
  imageUrl: string
  imageAlt: string
  fallback: string
  name: string
}

export interface IPostCard {
  id: number
  profile: IProfile
  datePosted: Date
  imageUrl: string
  imageAlt: string
  message: string
  location: string
  numLikes: number
  numComments: number
}

const profile: IProfile = {
  imageUrl: 'https://github.com/shadcn.png',
  imageAlt: '',
  fallback: 'SM',
  name: 'Sam Midgley',
}

const posts: IPostCard[] = [
  {
    id: 1,
    profile: profile,
    datePosted: subDays(new Date(), 3),
    imageUrl:
      'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1333&q=80',
    imageAlt: 'Opera',
    message:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum maiores autem cupiditate quos facilis accusantium.',
    location: 'Australia',
    numLikes: 23,
    numComments: 12,
  },
  {
    id: 2,
    profile: profile,
    datePosted: subDays(new Date(), 5),
    imageUrl:
      'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    imageAlt: 'Thailand',
    message: 'Voluptatum, adipisci voluptates eos porro minima earum exercitationem inventore voluptas labore quod.',
    location: 'Thailand',
    numLikes: 14,
    numComments: 8,
  },
]

export const Posts = () => {
  return (
    <div className="flex justify-between gap-10">
      <div>
        {posts.map((p) => (
          <PostCard key={p.id} {...p} />
        ))}
      </div>
      <Timeline />
    </div>
  )
}
