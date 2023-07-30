import { AspectRatio } from '@components/ui/aspect-ratio'
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar/avatar'
import { Card, CardHeader, CardContent, CardFooter } from '@components/ui/card/card'
import { ClockIcon, MessageSquare, Share2Icon, ThumbsUpIcon } from 'lucide-react'
import { formatDistance } from 'date-fns'
import { IPostCard } from '@types'
import { Button } from '@components/ui'
import { Separator } from '@components/ui/separator'
import { Badge } from '@components/ui/badge'
import { PostCardMore } from './PostCardMore'
import { useState } from 'react'
import { Comments } from './Comments'

export const PostCard = ({
  profile,
  datePosted,
  imageUrl,
  imageAlt,
  message,
  location,
  numLikes,
  numComments,
}: IPostCard) => {
  const timeAgo = formatDistance(datePosted, new Date(), { addSuffix: true })
  const [showComments, setShowComments] = useState(false)

  return (
    <Card className="w-[min(500px, 100%)] mb-5">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 relative">
          <Avatar className="h-8 w-8 border-2">
            <AvatarImage src={profile.imageUrl} alt={profile.imageAlt} />
            <AvatarFallback>{profile.initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm">{profile.firstName + ' ' + profile.lastName}</p>
            <div className="flex items-center gap-1">
              <ClockIcon className="w-3 h-3" />
              <p className="text-xs">
                {timeAgo} in <b>{location}</b>
              </p>
            </div>
          </div>
          <div className="absolute top-0 right-0">
            <PostCardMore />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm pb-2">{message}</p>
        <AspectRatio ratio={3 / 2}>
          <img src={imageUrl} alt={imageAlt} className="object-cover h-full w-full rounded-md" />
        </AspectRatio>
      </CardContent>
      <CardFooter className="block">
        <div className="flex justify-around mt-2">
          <Button variant="ghost">
            <ThumbsUpIcon className="w-4 h-4 mr-2" />
            <p className="font-light mr-2 hidden lg:block">Like</p>
            <Badge>{numLikes}</Badge>
          </Button>
          <Separator orientation="vertical" className="h-8" />
          <Button variant="ghost" onClick={() => setShowComments((prev) => !prev)}>
            <MessageSquare className="w-4 h-4 mr-2" />
            <p className="font-light mr-2 hidden lg:block">Comment</p>
            <Badge>{numComments}</Badge>
          </Button>
          <Separator orientation="vertical" className="h-8" />
          <Button variant="ghost">
            <Share2Icon className="w-4 h-4 mr-2" />
            <p className="font-light mr-2 hidden lg:block">Share</p>
          </Button>
        </div>
        {showComments && <Comments />}
      </CardFooter>
    </Card>
  )
}
