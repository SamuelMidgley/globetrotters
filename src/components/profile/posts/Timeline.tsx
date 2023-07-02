import { Button } from '@components/ui'
import { Card, CardHeader, CardContent, CardFooter } from '@components/ui/card/card'
import { MapPinIcon, PlaneTakeoffIcon } from 'lucide-react'
import { subDays, formatDistance } from 'date-fns'
import { Separator } from '@components/ui/separator'

export const Timeline = () => {
  return (
    <Card className="flex-1 mb-5 h-fit">
      <CardHeader>
        <p className="text-lg font-bold">Timeline</p>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm my-2">
          <MapPinIcon className="h-4 w-4 mr-2" />
          <p>
            Arrived in <b>Sydney, Australia</b> (
            {formatDistance(subDays(new Date(), 1), new Date(), { addSuffix: true })})
          </p>
        </div>
        <Separator orientation="vertical" className="h-4 ml-2" />
        <div className="flex items-center text-sm my-2">
          <MapPinIcon className="h-4 w-4 mr-2" />
          <p>
            Arrived in <b>Melbourne, Australia</b> (
            {formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })})
          </p>
        </div>
        <Separator orientation="vertical" className="h-4 ml-2" />
        <div className="flex items-center text-sm my-2">
          <PlaneTakeoffIcon className="h-4 w-4 mr-2" />
          <p>
            Going to <b>Melbourne, Australia</b>
          </p>
        </div>
        <Separator orientation="vertical" className="h-4 ml-2" />
        <div className="flex items-center text-sm my-2">
          <MapPinIcon className="h-4 w-4 mr-2" />
          <p>
            Visited <b>Auckland, New Zealand</b> (
            {formatDistance(subDays(new Date(), 5), new Date(), { addSuffix: true })})
          </p>
        </div>
        <Separator orientation="vertical" className="h-4 ml-2" />
      </CardContent>
      <CardFooter className="flex w-full justify-center">
        <Button variant="default">View more</Button>
      </CardFooter>
    </Card>
  )
}
