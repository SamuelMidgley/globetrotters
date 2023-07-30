import { Button, buttonVariants } from '@components/ui'
import { cn } from '@lib/utils'
import { MessageCircleIcon, UserCheck2Icon, UserPlus2Icon } from 'lucide-react'
import { Link } from 'react-router-dom'

interface InteractButtonsProps {
  isFollowing: boolean
}

export const InteractButtons = (props: InteractButtonsProps) => {
  const { isFollowing } = props

  const handleFollow = () => {
    // function to toggle follow
    console.log('clicked follow button')
  }

  return (
    <div className="flex gap-2 mb-4 lg:justify-between">
      <Button className="w-28 text-xs" variant="default" onClick={handleFollow}>
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
      <Link to={`/chat/12`} className={cn('w-28 text-xs', buttonVariants({ variant: 'outline' }))}>
        <MessageCircleIcon className="w-4 mr-1" />
        Message
      </Link>
    </div>
  )
}
