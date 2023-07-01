import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@components/ui/accordion/accordion'

interface AccordionStoryProps {
  headerOne: string
  headerTwo: string
  headerThree: string
}

export const AccordionStory = ({ headerOne, headerTwo, headerThree }: AccordionStoryProps) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{headerOne}</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>{headerTwo}</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components' aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>{headerThree}</AccordionTrigger>
        <AccordionContent>Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
