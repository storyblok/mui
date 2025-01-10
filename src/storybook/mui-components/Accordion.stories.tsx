import { ComponentMeta, ComponentStory } from '@storybook/react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from '@mui/material'
import { loremIpsum } from '@src/storybook/demo-utils/loremIpsum'

const Component = Accordion

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Mui Components/Accordion',
  component: Component,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Accordion>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => {
  const { children, ...accordionProps } = args
  return (
    <Stack>
      <Accordion {...accordionProps}>
        <AccordionSummary>
          <Typography variant="subtitle1">Summary A</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{loremIpsum}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion {...accordionProps}>
        <AccordionSummary>
          <Typography variant="subtitle1">Summary B</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{loremIpsum}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion {...accordionProps}>
        <AccordionSummary>
          <Typography variant="subtitle1">Summary C</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{loremIpsum}</Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  )
}
export const Basic = Template.bind({})
