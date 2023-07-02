import type { Meta, StoryObj } from '@storybook/react'

import { CalendarStory } from './CalendarStory'

const meta = {
  title: 'UI Kit/Calendar',
  component: CalendarStory,
  tags: ['autodocs'],
} satisfies Meta<typeof CalendarStory>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Calendar',
  },
}
