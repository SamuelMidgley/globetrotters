import type { Meta, StoryObj } from '@storybook/react'

import { SelectStory } from './SelectStory'

const meta = {
  title: 'UI Kit/Select',
  component: SelectStory,
  tags: ['autodocs'],
} satisfies Meta<typeof SelectStory>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Theme',
  },
}
