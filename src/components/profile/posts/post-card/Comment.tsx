import { IComment } from './Comments'
import { Avatar, AvatarImage, AvatarFallback } from '@components/ui/avatar/avatar'
import { Separator } from '@components/ui/separator'

interface CommentProps extends IComment {
  showSeparator: boolean
}

export const Comment = ({ profile, message, showSeparator }: CommentProps) => {
  return (
    <>
      <div className="flex gap-4 items-center">
        <Avatar className="h-8 w-8 border-2">
          <AvatarImage src={profile.imageUrl} alt={profile.imageAlt} />
          <AvatarFallback>{profile.fallback}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm">
            <b className="text-sm">{profile.name}: </b>
            {message}
          </p>
        </div>
      </div>
      {showSeparator && <Separator orientation="vertical" className="h-4 ml-[15px] my-1" />}
    </>
  )
}
