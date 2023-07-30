export interface ILocation {
  city: string
  country: string
}

export interface IProfile {
  profileId: number
  firstName: string
  lastName: string
  initials: string
  imageUrl: string
  imageAlt: string
  handle: string
  bio: string
  isFollowing: boolean
}

export interface ITimeline {
  timelineId: number
  type: 'location' | 'travel'
  location: ILocation
  date: Date
}

export interface IPostCard {
  id: number
  profile: IProfile
  datePosted: Date
  imageUrl: string
  imageAlt: string
  message: string
  location: string
  numLikes: number
  numComments: number
}
