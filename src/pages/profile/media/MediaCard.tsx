import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { IMediaCard } from '.'
import { MessageSquareIcon, ThumbsUpIcon } from 'lucide-react'

export const MediaCard = ({ label, imageUrl, alt, info }: IMediaCard) => {
  return (
    <div className="w-[500px]">
      <AspectRatio ratio={3 / 2}>
        <img src={imageUrl} alt={alt} className="object-cover h-full w-full rounded-md" />
      </AspectRatio>
      <div className="flex justify-between mt-1">
        <p className="text-sm">{label}</p>
        <div className="flex text-sm">
          <div className="flex mr-2 items-center">
            <ThumbsUpIcon className="w-4 h-4 mr-1" />
            {info.likeCount}
          </div>
          <div className="flex items-center">
            <MessageSquareIcon className="w-4 h-4 mr-1" />
            {info.commentCount}
          </div>
        </div>
      </div>
    </div>
  )
}
