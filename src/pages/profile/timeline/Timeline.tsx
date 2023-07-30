import { Card, CardHeader, CardContent } from '@components/ui/card/card'
import { TimelineItem } from '.'
import { mock_timeline } from './mock'

export const Timeline = () => {
  return (
    <Card className="flex-1 mb-5 h-fit">
      <CardHeader>
        <p className="text-lg font-bold">Timeline</p>
      </CardHeader>
      <CardContent>
        {mock_timeline.map((t) => (
          <TimelineItem key={t.timelineId} {...t} />
        ))}
      </CardContent>
    </Card>
  )
}
