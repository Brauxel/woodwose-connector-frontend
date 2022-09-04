import React, { TableHTMLAttributes } from 'react'
import styled from 'styled-components'

interface TableComponentProps {
  borderWidth?: string
  borderStyle?: string
  borderColor?: string
  textAlign?: string
}

interface TableProps extends TableHTMLAttributes<HTMLElement> {
  children: React.ReactNode
  styles?: TableComponentProps
}

const TableComponent = styled.table<TableComponentProps>`
  border-width: ${({ borderWidth }) => borderWidth || '1px'};
  border-style: ${({ borderStyle }) => borderStyle || 'solid'};
  border-color: ${({ borderColor }) => borderColor || 'black'};
  text-align: ${({ textAlign }) => textAlign || 'left'};
`

export const Table: React.FC<TableProps> = ({ children, styles, ...props }) => (
  <TableComponent
    data-testid="table-component"
    width="100%"
    {...props}
    {...styles}
  >
    {children}
  </TableComponent>
)
