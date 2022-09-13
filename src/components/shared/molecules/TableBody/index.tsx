import React from 'react'

interface TableBodyProps {
  children: React.ReactNode
}

export const TableBody: React.FC<TableBodyProps> = ({ children }) => (
  <tbody>{children}</tbody>
)
