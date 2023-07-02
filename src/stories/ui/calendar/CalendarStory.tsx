import { Calendar } from '@components/ui/calendar'
import { useState } from 'react'

interface CalendarStoryProps {
  title: string
}

export const CalendarStory = ({ title }: CalendarStoryProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="flex flex-col">
      <p>{title}</p>
      <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border w-fit" />
    </div>
  )
}
