import { Button } from '@components/ui'
import { MessageCircleIcon, UserCheck2Icon, UserPlus2Icon } from 'lucide-react'

interface InteractButtonsProps {
  isFollowing: boolean
}

export const InteractButtons = (props: InteractButtonsProps) => {
  const { isFollowing } = props

  return (
    <div className="flex gap-2 mb-4 lg:justify-between">
      <Button className="text-xs" variant="default">
        {isFollowing ? (
          <>
            <UserCheck2Icon className="w-4 mr-1" />
            Following
          </>
        ) : (
          <>
            <UserPlus2Icon className="w-4 mr-1" />
            Follow
          </>
        )}
      </Button>
      <Button className="text-xs" variant="outline">
        <MessageCircleIcon className="w-4 mr-1" />
        Message
      </Button>
    </div>
  )
}
