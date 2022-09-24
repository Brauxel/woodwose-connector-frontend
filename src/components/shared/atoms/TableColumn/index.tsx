import React, { TdHTMLAttributes } from 'react'
import styled from 'styled-components'

interface TableColumnComponentProps {
  borderWidth?: string
  borderStyle?: string
  borderColor?: string
}

interface TableColumnProps extends TdHTMLAttributes<HTMLElement> {
  children: React.ReactNode
  styles?: TableColumnComponentProps
}

const TableColumnComponent = styled.td<TableColumnComponentProps>`
  border-width: ${({ borderWidth }) => borderWidth || '1px'};
  border-style: ${({ borderStyle }) => borderStyle || 'solid'};
  border-color: ${({ borderColor }) => borderColor || 'black'};
`

export const TableColumn: React.FC<TableColumnProps> = ({
  children,
  styles,
  ...props
}) => (
  <TableColumnComponent {...props} {...styles}>
    {children}
  </TableColumnComponent>
)
