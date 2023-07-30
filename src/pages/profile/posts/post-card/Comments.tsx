import { Separator } from '@components/ui/separator'
import { IProfile } from '@types'
import { CommentInput } from './CommentInput'
import { Comment } from './Comment'

const profile: IProfile = {
  profileId: 1,
  firstName: 'Sam',
  lastName: 'Midgley',
  initials: 'SM',
  imageUrl: 'https://github.com/shadcn.png',
  imageAlt: '@shadcn',
  handle: '@smidge',
  bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eaque sit corporis perferendis a ducimus aliquam.',
  isFollowing: true,
}

export interface IComment {
  id: number
  profile: IProfile
  message: string
  datePosted: Date
}

const data: IComment[] = [
  {
    id: 1,
    profile: profile,
    message: 'Such a cool photo!',
    datePosted: new Date(),
  },
  {
    id: 2,
    profile: profile,
    message: 'Thanks for the comments',
    datePosted: new Date(),
  },
]

export const Comments = () => {
  return (
    <div className="mt-4">
      <Separator />
      <CommentInput />
      {data.map((d, i) => (
        <Comment key={d.id} {...d} showSeparator={i !== data.length - 1} />
      ))}
    </div>
  )
}
