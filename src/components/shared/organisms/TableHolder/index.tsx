import { TableColumn } from '../../atoms/TableColumn'
import { TableHead } from '../../atoms/TableHead'
import { Table } from '../../elements/Table'
import { TableRow } from '../../molecules/TableRow'

export const TableHolder = () => {
  return (
    <Table>
      <TableRow>
        <TableHead>Table container</TableHead>
      </TableRow>

      <TableRow>
        <TableColumn>Table col</TableColumn>
      </TableRow>
    </Table>
  )
}
