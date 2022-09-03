import React from 'react'
import styled from 'styled-components'

interface TableComponentProps {
  borderWidth?: string
  borderStyle?: string
  borderColor?: string
  width?: string
  textAlign?: string
}

interface TableProps {
  children: React.ReactNode
  styles?: TableComponentProps
}

const TableComponent = styled.table<TableComponentProps>`
  border-width: ${({ borderWidth }) => borderWidth || '1px'};
  border-style: ${({ borderStyle }) => borderStyle || 'solid'};
  border-color: ${({ borderColor }) => borderColor || 'black'};
  width: ${({ width }) => width || '100%'};
  text-align: ${({ textAlign }) => textAlign || 'left'};
`

export const Table: React.FC<TableProps> = ({ children, styles }) => (
  <TableComponent {...styles}>{children}</TableComponent>
)
