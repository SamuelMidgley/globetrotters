import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@components/ui/dropdown-menu/dropdown-menu'

interface DropdownMenuStoryProps {
  label: string
}

export const DropdownMenuStory = ({ label }: DropdownMenuStoryProps) => {
  return (
    <div className="w-full flex justify-center h-36">
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>{label}</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
