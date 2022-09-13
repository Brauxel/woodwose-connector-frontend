import React, { ThHTMLAttributes } from 'react'
import styled from 'styled-components'

interface TableHeadComponentProps {
  borderWidth?: string
  borderStyle?: string
  borderColor?: string
}

interface TableHeadingProps extends ThHTMLAttributes<HTMLElement> {
  children: React.ReactNode
  styles?: TableHeadComponentProps
}

const TableHeadingComponent = styled.th<TableHeadComponentProps>`
  border-width: ${({ borderWidth }) => borderWidth || '1px'};
  border-style: ${({ borderStyle }) => borderStyle || 'solid'};
  border-color: ${({ borderColor }) => borderColor || 'black'};
  text-transform: capitalize;
`

export const TableHeading: React.FC<TableHeadingProps> = ({
  children,
  styles,
  ...props
}) => (
  <TableHeadingComponent {...props} {...styles}>
    {children}
  </TableHeadingComponent>
)
