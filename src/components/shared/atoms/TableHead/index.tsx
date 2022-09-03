import React from 'react'
import styled from 'styled-components'

interface TableHeadComponentProps {
  borderWidth?: string
  borderStyle?: string
  borderColor?: string
}

interface TableHeadProps {
  children: React.ReactNode
  styles?: TableHeadComponentProps
}

const TableHeadComponent = styled.td<TableHeadComponentProps>`
  border-width: ${({ borderWidth }) => borderWidth || '1px'};
  border-style: ${({ borderStyle }) => borderStyle || 'solid'};
  border-color: ${({ borderColor }) => borderColor || 'black'};
`

export const TableHead: React.FC<TableHeadProps> = ({ children, styles }) => (
  <TableHeadComponent {...styles}>{children}</TableHeadComponent>
)
