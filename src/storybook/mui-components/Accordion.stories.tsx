import type { Args, Meta, StoryObj } from '@storybook/react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from '@mui/material'
import { loremIpsum } from '@src/storybook/demo-utils/loremIpsum'

const meta: Meta<typeof Accordion> = {
  title: 'Mui Components/Accordion',
  component: Accordion,
}

export default meta

type Story = StoryObj<typeof Accordion>

export const Basic: Story = {
  render: (args: Args) => {
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
  },
}
