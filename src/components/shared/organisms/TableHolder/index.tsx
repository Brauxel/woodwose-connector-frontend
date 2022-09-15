import React from 'react'
import { TableColumn } from '../../atoms/TableColumn'
import { TableHeading } from '../../atoms/TableHeading'
import { Table } from '../../elements/Table'
import { TableBody } from '../../molecules/TableBody'
import { TableHead } from '../../molecules/TableHead'
import { TableRow } from '../../molecules/TableRow'

interface ContentEntryType {
  rowSpan?: number
  colSpan?: number
  content?: React.ReactNode
}

export interface ColDataType {
  id: number | string
  contentEntry: ContentEntryType
}

export interface RowDataType {
  id: number | string
  colData: ColDataType[]
}

export interface TableHolderProps {
  titles: string[]
  rowData: RowDataType[]
}

export const TableHolder: React.FC<TableHolderProps> = ({
  titles,
  rowData,
}) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {titles.map((title, index) => (
            <TableHeading key={title + index}>{title}</TableHeading>
          ))}
        </TableRow>
      </TableHead>

      <TableBody>
        {rowData.map(({ id, colData }) => (
          <TableRow key={id}>
            {colData.map(({ id, contentEntry }) => (
              <TableColumn
                key={id}
                rowSpan={contentEntry.rowSpan}
                colSpan={contentEntry.colSpan}
              >
                {contentEntry.content}
              </TableColumn>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
