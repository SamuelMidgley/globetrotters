import { Button } from '@components/ui'
import { Avatar, AvatarImage, AvatarFallback } from '@components/ui/avatar/avatar'
import { Input } from '@components/ui/input/input'
import { IProfile } from '..'

const profile: IProfile = {
  imageUrl: 'https://github.com/shadcn.png',
  imageAlt: '',
  fallback: 'SM',
  name: 'Sam Midgley',
}

export const CommentInput = () => {
  return (
    <div className="my-4 flex items-center gap-4">
      <Avatar className="h-8 w-8 border-2">
        <AvatarImage src={profile.imageUrl} alt={profile.imageAlt} />
        <AvatarFallback>{profile.fallback}</AvatarFallback>
      </Avatar>
      <Input placeholder="What's on your mind..." />
      <Button>Post</Button>
    </div>
  )
}
