import { Input } from '@components/ui/input/input'

interface InputStoryProps {
  placeholder: string
}

export const InputStory = ({ placeholder }: InputStoryProps) => {
  return <Input className="w-28" placeholder={placeholder} />
}
