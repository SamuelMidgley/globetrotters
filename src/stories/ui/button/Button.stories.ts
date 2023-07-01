import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@components/ui/button/button'

const meta = {
  title: 'UI Kit/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Button',
  },
}
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
}
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Button',
  },
}
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Button',
  },
}
export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Button',
  },
}
