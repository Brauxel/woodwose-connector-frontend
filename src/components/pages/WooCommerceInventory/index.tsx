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
          <TableColumn rowSpan={5}>
            Men&apos;s Bamboo Tee- Dark Grey T-shirt
          </TableColumn>
          <TableColumn rowSpan={5}>BAMTSDG02</TableColumn>
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
          <TableColumn>₹569</TableColumn>
          <TableColumn>M</TableColumn>
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
          <TableColumn>₹569</TableColumn>
          <TableColumn>L</TableColumn>
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
          <TableColumn>₹569</TableColumn>
          <TableColumn>XL</TableColumn>
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
          <TableColumn>₹569</TableColumn>
          <TableColumn>XXL</TableColumn>
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
          <TableColumn rowSpan={5}>
            Women&apos;s Bamboo Tank Top-Dark Grey
          </TableColumn>
          <TableColumn rowSpan={5}>BAWTTDG02</TableColumn>
          <TableColumn>₹699</TableColumn>
          <TableColumn>S</TableColumn>
          <TableColumn>
            <a
              href="https://woodwose.in/product/womens-dark-grey-tank-top/"
              target="_blank"
              rel="noreferrer"
            >
              Click here to view the product on our website
            </a>
          </TableColumn>
        </TableRow>

        <TableRow>
          <TableColumn>₹699</TableColumn>
          <TableColumn>M</TableColumn>
          <TableColumn>
            <a
              href="https://woodwose.in/product/womens-dark-grey-tank-top/"
              target="_blank"
              rel="noreferrer"
            >
              Click here to view the product on our website
            </a>
          </TableColumn>
        </TableRow>

        <TableRow>
          <TableColumn>₹699</TableColumn>
          <TableColumn>L</TableColumn>
          <TableColumn>
            <a
              href="https://woodwose.in/product/womens-dark-grey-tank-top/"
              target="_blank"
              rel="noreferrer"
            >
              Click here to view the product on our website
            </a>
          </TableColumn>
        </TableRow>

        <TableRow>
          <TableColumn>₹699</TableColumn>
          <TableColumn>XL</TableColumn>
          <TableColumn>
            <a
              href="https://woodwose.in/product/womens-dark-grey-tank-top/"
              target="_blank"
              rel="noreferrer"
            >
              Click here to view the product on our website
            </a>
          </TableColumn>
        </TableRow>

        <TableRow>
          <TableColumn>₹699</TableColumn>
          <TableColumn>XXL</TableColumn>
          <TableColumn>
            <a
              href="https://woodwose.in/product/womens-dark-grey-tank-top/"
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
