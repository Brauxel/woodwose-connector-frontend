import { TableColumn } from '../../shared/atoms/TableColumn'
import { TableHead } from '../../shared/atoms/TableHead'
import { Table } from '../../shared/elements/Table'
import { TableRow } from '../../shared/molecules/TableRow'

const products = [
  {
    name: "Men's Bamboo Tee- Dark Grey T-shirt",
    id: 5015,
    variations: [
      {
        id: 5020,
        sku: 'BAMTSDG02--S',
        price: '899',
        size: 'S',
        stock_quantity: 1,
        permalink:
          'https://woodwose.in/product/mens-bamboo-dark-grey-t-shirt/?attribute_pa_size=s',
      },
      {
        id: 5019,
        sku: 'BAMTSDG02--M',
        price: '899',
        size: 'M',
        stock_quantity: 2,
        permalink:
          'https://woodwose.in/product/mens-bamboo-dark-grey-t-shirt/?attribute_pa_size=m',
      },
      {
        id: 5018,
        sku: 'BAMTSDG02--L',
        price: '999',
        size: 'L',
        stock_quantity: 1,
        permalink:
          'https://woodwose.in/product/mens-bamboo-dark-grey-t-shirt/?attribute_pa_size=l',
      },
      {
        id: 5017,
        sku: 'BAMTSDG02--XL',
        price: '899',
        size: 'XL',
        stock_quantity: 2,
        permalink:
          'https://woodwose.in/product/mens-bamboo-dark-grey-t-shirt/?attribute_pa_size=xl',
      },
      {
        id: 5016,
        sku: 'BAMTSDG02--XXL',
        price: '1099',
        size: 'XXL',
        stock_quantity: 3,
        permalink:
          'https://woodwose.in/product/mens-bamboo-dark-grey-t-shirt/?attribute_pa_size=xxl',
      },
    ],
  },
  {
    name: "Women's Bamboo Tank Top-Dark Grey",
    id: 5030,
    variations: [
      {
        id: 5031,
        sku: 'BAMTSDG02--S',
        price: '899',
        size: 'S',
        stock_quantity: 1,
        permalink:
          'https://woodwose.in/product/mens-bamboo-dark-grey-t-shirt/?attribute_pa_size=s',
      },
      {
        id: 5032,
        sku: 'BAMTSDG02--M',
        price: '899',
        size: 'M',
        stock_quantity: 2,
        permalink:
          'https://woodwose.in/product/mens-bamboo-dark-grey-t-shirt/?attribute_pa_size=m',
      },
      {
        id: 5033,
        sku: 'BAMTSDG02--L',
        price: '999',
        size: 'L',
        stock_quantity: 1,
        permalink:
          'https://woodwose.in/product/mens-bamboo-dark-grey-t-shirt/?attribute_pa_size=l',
      },
      {
        id: 5034,
        sku: 'BAMTSDG02--XL',
        price: '899',
        size: 'XL',
        stock_quantity: 2,
        permalink:
          'https://woodwose.in/product/mens-bamboo-dark-grey-t-shirt/?attribute_pa_size=xl',
      },
      {
        id: 5035,
        sku: 'BAMTSDG02--XXL',
        price: '1099',
        size: 'XXL',
        stock_quantity: 3,
        permalink:
          'https://woodwose.in/product/mens-bamboo-dark-grey-t-shirt/?attribute_pa_size=xxl',
      },
    ],
  },
]

export const WooCommerceInventory = () => {
  return (
    <>
      <Table>
        <thead>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Link</TableHead>
          </TableRow>
        </thead>
        {products.map((product) => {
          return (
            <tbody key={product.id}>
              <TableRow key={product.variations[0].id}>
                <TableColumn rowSpan={product.variations.length}>
                  {product.name}
                </TableColumn>
                <TableColumn>{product.variations[0].sku}</TableColumn>
                <TableColumn>₹{product.variations[0].price}</TableColumn>
                <TableColumn>{product.variations[0].size}</TableColumn>
                <TableColumn>
                  {product.variations[0].stock_quantity}
                </TableColumn>
                <TableColumn>
                  <a
                    href={product.variations[0].permalink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here to view the product on our website
                  </a>
                </TableColumn>
              </TableRow>

              {product.variations.map((variation, index) => {
                if (index === 0) return ''
                return (
                  <TableRow key={variation.id}>
                    <TableColumn>{variation.sku}</TableColumn>
                    <TableColumn>{variation.price}</TableColumn>
                    <TableColumn>{variation.size}</TableColumn>
                    <TableColumn>{variation.stock_quantity}</TableColumn>
                    <TableColumn>
                      <a
                        href={variation.permalink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Click here to view the product on our website
                      </a>
                    </TableColumn>
                  </TableRow>
                )
              })}
            </tbody>
          )
        })}
      </Table>
    </>
  )
}
