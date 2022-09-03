import { TableColumn } from '../../shared/atoms/TableColumn'
import { TableHead } from '../../shared/atoms/TableHead'
import { Table } from '../../shared/elements/Table'
import { TableRow } from '../../shared/molecules/TableRow'

export const WooCommerceInventory = () => {
  return (
    <>
      <Table>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>SKU</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Size</TableHead>
          <TableHead>Link</TableHead>
        </TableRow>

        <TableRow>
          <TableColumn>
            Men&apos;s 100 % Organic Cotton Tee- Black T-shirt
          </TableColumn>
          <TableColumn>SKU goes here</TableColumn>
          <TableColumn>₹569</TableColumn>
          <TableColumn>S</TableColumn>
          <TableColumn>
            <a
              href="https://woodwose.in/product/mens-100-organic-cotton-black-t-shirt/"
              target="_blank"
              rel="noreferrer"
            >
              Click here to view the product on our website
            </a>
          </TableColumn>
        </TableRow>

        <TableRow>
          <TableColumn>
            Men&apos;s 100 % Organic Cotton Tee- Brittany Blue T-shirt
          </TableColumn>
          <TableColumn>SKU goes here</TableColumn>
          <TableColumn>₹469</TableColumn>
          <TableColumn>S</TableColumn>
          <TableColumn>
            <a
              href="https://woodwose.in/product/100-organic-cotton-mens-brittany-blue-t-shirt/"
              target="_blank"
              rel="noreferrer"
            >
              Click here to view the product on our website
            </a>
          </TableColumn>
        </TableRow>
      </Table>
    </>
  )
}
