import reactRenderer from 'react-test-renderer'
import { Table } from '..'
import { TableRow } from '../../../molecules/TableRow'
import { TableColumn } from '../../../atoms/TableColumn'

describe('Table Component', () => {
  describe('render component', () => {
    it('should render the provided child JSX components', () => {
      const tableInstance = reactRenderer.create(
        <Table>
          <TableRow>
            <TableColumn>This is a table column</TableColumn>
          </TableRow>
        </Table>
      ).root

      expect(tableInstance.findByType(TableRow)).toBeTruthy()
      expect(tableInstance.findByType(TableColumn)).toBeTruthy()
    })
  })

  describe('snapshots', () => {
    it('snapshots should match when default styles are used', () => {
      const tableComponent = reactRenderer.create(
        <Table>
          <TableRow>
            <TableColumn>This is a table column</TableColumn>
          </TableRow>
        </Table>
      )

      expect(tableComponent.toJSON()).toMatchSnapshot()
    })

    it('snapshots should match when custom styles are used', () => {
      const tableComponent = reactRenderer.create(
        <Table
          width="80%"
          styles={{
            borderColor: 'blue',
            borderWidth: '2px',
            borderStyle: 'dotted',
          }}
        >
          <TableRow>
            <TableColumn>This is a table column</TableColumn>
          </TableRow>
        </Table>
      )

      expect(tableComponent.toJSON()).toMatchSnapshot()
    })
  })
})
