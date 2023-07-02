import { Button } from '@components/ui'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu/dropdown-menu'
import { MoreVerticalIcon, PencilIcon, Trash2Icon } from 'lucide-react'

export const PostCardMore = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-6 h-6 p-1" aria-label="More options">
          <MoreVerticalIcon className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>More options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <PencilIcon className="mr-2 h-4 w-4" />
          <span>Edit post</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Trash2Icon className="mr-2 h-4 w-4" />
          <span>Delete post</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
