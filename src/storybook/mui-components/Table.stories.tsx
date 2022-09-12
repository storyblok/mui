import { ComponentStory, ComponentMeta } from '@storybook/react'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { FunctionComponent } from 'react'
import { Typography } from '@mui/material'

const row = (
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) => ({
  name,
  calories,
  fat,
  carbs,
  protein,
})

const rows = [
  row('Frozen yoghurt', 159, 6.0, 24, 4.0),
  row('Ice cream sandwich', 237, 9.0, 37, 4.3),
  row('Eclair', 262, 16.0, 24, 6.0),
  row('Cupcake', 305, 3.7, 67, 4.3),
  row('Gingerbread', 356, 16.0, 49, 3.9),
]

const BasicTable: FunctionComponent = () => (
  <TableContainer component={Paper}>
    <Table
      sx={{ minWidth: 650 }}
      aria-label="simple table"
    >
      <TableHead>
        <TableRow>
          <TableCell>Dessert (100g serving)</TableCell>
          <TableCell align="right">Calories</TableCell>
          <TableCell align="right">Fat&nbsp;(g)</TableCell>
          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
          <TableCell align="right">Protein&nbsp;(g)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell
              component="th"
              scope="row"
            >
              <Typography variant="subtitle1">{row.name}</Typography>
            </TableCell>
            <TableCell
              align="right"
              sx={{ color: 'text.secondary' }}
            >
              {row.calories}
            </TableCell>
            <TableCell
              align="right"
              sx={{ color: 'text.secondary' }}
            >
              {row.fat}
            </TableCell>
            <TableCell
              align="right"
              sx={{ color: 'text.secondary' }}
            >
              {row.carbs}
            </TableCell>
            <TableCell
              align="right"
              sx={{ color: 'text.secondary' }}
            >
              {row.protein}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)

const Component = BasicTable

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `Mui Components/Table`,
  component: Component,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Component>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
)

export const Basic = Template.bind({})
