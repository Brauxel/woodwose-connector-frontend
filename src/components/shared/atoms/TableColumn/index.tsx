import React from 'react'
import styled from 'styled-components'

interface TableRowColumnProps {
  children: React.ReactNode
}

const TableColumnComponent = styled.td`
  border: 1px solid black;
`

export const TableColumn: React.FC<TableRowColumnProps> = ({ children }) => (
  <TableColumnComponent>{children}</TableColumnComponent>
)
