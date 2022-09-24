import React from 'react'

interface TableHeadProps {
  children: React.ReactNode
}

export const TableHead: React.FC<TableHeadProps> = ({ children }) => (
  <thead>{children}</thead>
)
