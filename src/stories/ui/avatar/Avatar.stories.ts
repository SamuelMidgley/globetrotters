import type { Meta, StoryObj } from '@storybook/react'

import { AvatarStory } from './AvatarStory'

const meta = {
  title: 'UI Kit/Avatar',
  component: AvatarStory,
  tags: ['autodocs'],
} satisfies Meta<typeof AvatarStory>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    imgUrl: 'https://github.com/shadcn.png',
    fallback: 'SM',
  },
}
