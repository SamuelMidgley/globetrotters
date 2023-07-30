import { subDays } from 'date-fns'
import { ITimeline } from '@types'

export const mock_timeline: ITimeline[] = [
  {
    timelineId: 1,
    type: 'location',
    date: subDays(new Date(), 1),
    location: {
      city: 'Sydney',
      country: 'Australia',
    },
  },
  {
    timelineId: 2,
    type: 'location',
    date: subDays(new Date(), 3),
    location: {
      city: 'Melbourne',
      country: 'Australia',
    },
  },
  {
    timelineId: 3,
    type: 'travel',
    date: subDays(new Date(), 3),
    location: {
      city: 'Melbourne',
      country: 'Australia',
    },
  },
  {
    timelineId: 4,
    type: 'location',
    date: subDays(new Date(), 6),
    location: {
      city: 'Auckland',
      country: 'New Zealand',
    },
  },
]
