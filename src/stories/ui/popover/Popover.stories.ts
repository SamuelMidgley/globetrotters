import type { Meta, StoryObj } from '@storybook/react'

import { PopoverStory } from './PopoverStory'

const meta = {
  title: 'UI Kit/Popover',
  component: PopoverStory,
  tags: ['autodocs'],
} satisfies Meta<typeof PopoverStory>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    buttonText: 'Open',
    popoverContent: 'Place content for the popover here.',
  },
}
