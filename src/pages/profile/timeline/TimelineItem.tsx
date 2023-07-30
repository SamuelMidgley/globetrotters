import { Separator } from '@components/ui/separator'
import { PlaneTakeoffIcon, MapPinIcon } from 'lucide-react'
import { formatDistance } from 'date-fns'
import { ITimeline } from '@types'

export function TimelineItem(props: ITimeline) {
  const { location, type, date } = props

  return (
    <>
      <div className="flex items-center text-sm my-2">
        {type === 'location' && <MapPinIcon className="h-4 w-4 mr-2" />}
        {type === 'travel' && <PlaneTakeoffIcon className="h-4 w-4 mr-2" />}
        <p>
          {type === 'location' && <>Arrived in </>}
          {type === 'travel' && <>Going to </>}
          <b>
            {location.city}, {location.country}{' '}
          </b>
        </p>
        {type === 'location' && <p className="ml-auto">{formatDistance(date, new Date(), { addSuffix: true })}</p>}
      </div>
      <Separator orientation="vertical" className="h-4 ml-2" />
    </>
  )
}
