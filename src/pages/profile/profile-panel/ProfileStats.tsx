import { Card, CardContent } from '@components/ui/card/card'
import { Separator } from '@components/ui/separator'
import { Stats } from './Stats'

export const ProfileStats = () => {
  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <div className="flex justify-between mx-2">
          <Stats count="324" label="Folllowing" />
          <Stats count="13.5k" label="Followers" />
        </div>
        <Separator className="my-4" />
        <div className="flex justify-between mx-2">
          <Stats count="7" label="Countries" />
          <Stats count="32" label="Posts" />
        </div>
      </CardContent>
    </Card>
  )
}
