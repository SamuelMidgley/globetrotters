import type { Meta, StoryObj } from '@storybook/react'

import { InputStory } from './InputStory'

const meta = {
  title: 'UI Kit/Input',
  component: InputStory,
  tags: ['autodocs'],
} satisfies Meta<typeof InputStory>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Placeholder...',
  },
}
