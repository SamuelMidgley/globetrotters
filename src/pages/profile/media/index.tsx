import { MediaCard } from './MediaCard'
import { mock_media } from './mock'

interface IMediaInfo {
  likeCount: number
  commentCount: number
}

export interface IMediaCard {
  label: string
  imageUrl: string
  alt: string
  info: IMediaInfo
}

export const Media = () => {
  return (
    <div className="mt-2 flex gap-4 flex-wrap">
      {mock_media.map((d, i) => (
        <MediaCard key={i} {...d} />
      ))}
    </div>
  )
}
