import type { Meta, StoryObj } from '@storybook/react'

import { AccordionStory } from './AccordionStory'

const meta = {
  title: 'UI Kit/Accordion',
  component: AccordionStory,
  tags: ['autodocs'],
} satisfies Meta<typeof AccordionStory>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    headerOne: 'Is it accessible?',
    headerTwo: 'Is it styled?',
    headerThree: 'Is it animated?',
  },
}
