import { Avatar, AvatarImage, AvatarFallback } from '@components/ui/avatar/avatar'

interface AvatarStoryProps {
  imgUrl: string
  fallback: string
}

export const AvatarStory = ({ imgUrl, fallback }: AvatarStoryProps) => {
  return (
    <Avatar>
      <AvatarImage src={imgUrl} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  )
}
