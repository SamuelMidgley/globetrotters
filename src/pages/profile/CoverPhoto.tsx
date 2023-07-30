import { UserCog2Icon } from 'lucide-react'
import { buttonVariants } from '@components/ui'
import { Link } from 'react-router-dom'
import { cn } from '@lib/utils'

export const CoverPhoto = () => {
  // Use React Context
  const isUser = true

  return (
    <div className="flex h-40 w-full justify-center relative">
      <img
        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt=""
        className="object-cover h-full w-full rounded-b-md"
      />
      {isUser && (
        <Link
          to={`/profile/edit/2`}
          className={cn('absolute bottom-2 right-2 text-xs', buttonVariants({ variant: 'outline' }))}
        >
          <UserCog2Icon className="w-4 mr-1" />
          Edit profile
        </Link>
      )}
    </div>
  )
}
