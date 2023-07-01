import type { Meta, StoryObj } from '@storybook/react'

import { DropdownMenuStory } from './DropdownMenuStory'

const meta = {
  title: 'UI Kit/Dropdown',
  component: DropdownMenuStory,
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenuStory>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Open',
  },
}
