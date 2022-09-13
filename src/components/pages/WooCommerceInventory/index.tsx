import { keys, remove } from 'lodash'
import { TableColumn } from '../../shared/atoms/TableColumn'
import { TableHeading } from '../../shared/atoms/TableHeading'
import { Table } from '../../shared/elements/Table'
import { TableBody } from '../../shared/molecules/TableBody'
import { TableHead } from '../../shared/molecules/TableHead'
import { TableRow } from '../../shared/molecules/TableRow'

interface ProductVariations {
  id: number
  sku: string
  price: string
  size: string
  quantity: number
  permalink: string
}
interface ProductData {
  name: string
  id: number
  variations: ProductVariations[]
}

const productsData: ProductData[] = [
  {
    name: "Men's Bamboo Tee- Dark Grey T-shirt",
    id: 5015,
    variations: [
      {
        id: 5020,
        sku: 'BAMTSDG02--S',
        price: '899',
        size: 'S',
        quantity: 1,
        permalink:
          'https://woodwose.in/product/mens-bamboo-dark-grey-t-shirt/?attribute_pa_size=s',
      },
      {
        id: 5019,
        sku: 'BAMTSDG02--M',
        price: '899',
        size: 'M',
        quantity: 2,
        permalink:
          'https://woodwose.in/product/mens-bamboo-dark-grey-t-shirt/?attribute_pa_size=m',
      },
      {
        id: 5018,
        sku: 'BAMTSDG02--L',
        price: '999',
        size: 'L',
        quantity: 1,
        permalink:
          'https://woodwose.in/product/mens-bamboo-dark-grey-t-shirt/?attribute_pa_size=l',
      },
      {
        id: 5017,
        sku: 'BAMTSDG02--XL',
        price: '899',
        size: 'XL',
        quantity: 2,
        permalink:
          'https://woodwose.in/product/mens-bamboo-dark-grey-t-shirt/?attribute_pa_size=xl',
      },
      {
        id: 5016,
        sku: 'BAMTSDG02--XXL',
        price: '1099',
        size: 'XXL',
        quantity: 3,
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
        quantity: 1,
        permalink:
          'https://woodwose.in/product/mens-bamboo-dark-grey-t-shirt/?attribute_pa_size=s',
      },
      {
        id: 5032,
        sku: 'BAMTSDG02--M',
        price: '899',
        size: 'M',
        quantity: 2,
        permalink:
          'https://woodwose.in/product/mens-bamboo-dark-grey-t-shirt/?attribute_pa_size=m',
      },
      {
        id: 5033,
        sku: 'BAMTSDG02--L',
        price: '999',
        size: 'L',
        quantity: 1,
        permalink:
          'https://woodwose.in/product/mens-bamboo-dark-grey-t-shirt/?attribute_pa_size=l',
      },
      {
        id: 5034,
        sku: 'BAMTSDG02--XL',
        price: '899',
        size: 'XL',
        quantity: 2,
        permalink:
          'https://woodwose.in/product/mens-bamboo-dark-grey-t-shirt/?attribute_pa_size=xl',
      },
      {
        id: 5035,
        sku: 'BAMTSDG02--XXL',
        price: '1099',
        size: 'XXL',
        quantity: 3,
        permalink:
          'https://woodwose.in/product/mens-bamboo-dark-grey-t-shirt/?attribute_pa_size=xxl',
      },
    ],
  },
]

export const WooCommerceInventory = () => {
  const tableTitles = remove(['Name', ...keys(productsData[0].variations[0])])
  remove(tableTitles, (n) => n === 'id')

  return (
    <>
      <Table>
        {tableTitles.length < 0 ? (
          ''
        ) : (
          <TableHead>
            <TableRow>
              {tableTitles.map((title, index) => (
                <TableHeading key={title + index}>{title}</TableHeading>
              ))}
            </TableRow>
          </TableHead>
        )}
        {productsData.map((product) => {
          return (
            <TableBody key={product.id}>
              <TableRow key={product.variations[0].id}>
                <TableColumn rowSpan={product.variations.length}>
                  {product.name}
                </TableColumn>
                <TableColumn>{product.variations[0].sku}</TableColumn>
                <TableColumn>₹{product.variations[0].price}</TableColumn>
                <TableColumn>{product.variations[0].size}</TableColumn>
                <TableColumn>{product.variations[0].quantity}</TableColumn>
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
                    <TableColumn>{variation.quantity}</TableColumn>
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
            </TableBody>
          )
        })}
      </Table>
    </>
  )
}
