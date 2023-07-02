import { MediaCard } from './MediaCard'

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

const data: IMediaCard[] = [
  {
    label: 'Snowy mountain',
    imageUrl:
      'https://images.unsplash.com/photo-1687800132770-8f1600a5849e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80',
    alt: 'mountain',
    info: {
      likeCount: 12,
      commentCount: 2,
    },
  },
  {
    label: 'Volcano',
    imageUrl:
      'https://images.unsplash.com/photo-1687226012369-36ec24bec4c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    alt: 'mountain',
    info: {
      likeCount: 31,
      commentCount: 12,
    },
  },
  {
    label: 'Desert',
    imageUrl:
      'https://images.unsplash.com/photo-1685792689144-ab617ee16bcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    alt: 'mountain',
    info: {
      likeCount: 19,
      commentCount: 9,
    },
  },
]

export const Media = () => {
  return (
    <div className="mt-2 flex gap-4 flex-wrap">
      {data.map((d, i) => (
        <MediaCard key={i} {...d} />
      ))}
    </div>
  )
}
