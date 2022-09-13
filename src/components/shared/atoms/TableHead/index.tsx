import React, { ThHTMLAttributes } from 'react'
import styled from 'styled-components'

interface TableHeadComponentProps {
  borderWidth?: string
  borderStyle?: string
  borderColor?: string
}

interface TableHeadProps extends ThHTMLAttributes<HTMLElement> {
  children: React.ReactNode
  styles?: TableHeadComponentProps
}

const TableHeadComponent = styled.th<TableHeadComponentProps>`
  border-width: ${({ borderWidth }) => borderWidth || '1px'};
  border-style: ${({ borderStyle }) => borderStyle || 'solid'};
  border-color: ${({ borderColor }) => borderColor || 'black'};
  text-transform: capitalize;
`

export const TableHead: React.FC<TableHeadProps> = ({
  children,
  styles,
  ...props
}) => (
  <TableHeadComponent {...props} {...styles}>
    {children}
  </TableHeadComponent>
)
