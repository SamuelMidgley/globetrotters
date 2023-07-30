import { Button } from '@components/ui'
import { Avatar, AvatarImage, AvatarFallback } from '@components/ui/avatar/avatar'
import { Input } from '@components/ui/input/input'
import { IProfile } from '@types'

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

export const CommentInput = () => {
  return (
    <div className="my-4 flex items-center gap-4">
      <Avatar className="h-8 w-8 border-2">
        <AvatarImage src={profile.imageUrl} alt={profile.imageAlt} />
        <AvatarFallback>{profile.initials}</AvatarFallback>
      </Avatar>
      <Input placeholder="What's on your mind..." />
      <Button>Post</Button>
    </div>
  )
}
