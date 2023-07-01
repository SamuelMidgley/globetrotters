import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@components/ui/select/select'

interface SelectStoryProps {
  placeholder: string
}

export const SelectStory = ({ placeholder }: SelectStoryProps) => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  )
}
