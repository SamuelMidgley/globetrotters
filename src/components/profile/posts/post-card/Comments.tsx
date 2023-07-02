import { Separator } from '@components/ui/separator'
import { IProfile } from '..'
import { CommentInput } from './CommentInput'
import { Comment } from './Comment'

const profile: IProfile = {
  imageUrl: 'https://github.com/shadcn.png',
  imageAlt: '',
  fallback: 'SM',
  name: 'Sam Midgley',
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
