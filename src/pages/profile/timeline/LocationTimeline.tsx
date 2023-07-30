import { Separator } from '@components/ui/separator'
import { formatDistance, subDays } from 'date-fns'
import { MapPinIcon } from 'lucide-react'
import { ILocation } from '@types'

interface TravelTimelineProps {
  location: ILocation
}

export function LocationTimeline(props: TravelTimelineProps) {
  const { location } = props

  return (
    <>
      <div className="flex items-center text-sm my-2">
        <MapPinIcon className="h-4 w-4 mr-2" />
        <p>
          Arrived in{' '}
          <b>
            {location.city}, {location.country}
          </b>{' '}
          ({formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })})
        </p>
      </div>
      <Separator orientation="vertical" className="h-4 ml-2" />
    </>
  )
}
