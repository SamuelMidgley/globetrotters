import { Popover, PopoverTrigger, PopoverContent } from '@components/ui/popover'

interface PopoverStoryProps {
  buttonText: string
  popoverContent: string
}

export const PopoverStory = ({ buttonText, popoverContent }: PopoverStoryProps) => {
  return (
    <div className="flex w-full justify-center">
      <Popover>
        <PopoverTrigger>{buttonText}</PopoverTrigger>
        <PopoverContent>{popoverContent}</PopoverContent>
      </Popover>
    </div>
  )
}
