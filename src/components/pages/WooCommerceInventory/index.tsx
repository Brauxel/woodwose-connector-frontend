import { extractTitlesFromInventory } from '../../../utils/dataUtils/wooCommerceDataUtils/wooCommerceProductUtils'
import { productsData } from '../../../utils/testUtils/mockData/WooCommerceInventory/ProductData'
import { TableHolder } from '../../shared/organisms/TableHolder'

export const WooCommerceInventory = () => {
  return (
    <>
      <TableHolder
        titles={extractTitlesFromInventory(productsData)}
        rowData={[
          {
            id: 5020,
            colData: [
              {
                id: '5020-name',
                contentEntry: {
                  rowSpan: 2,
                  content: "Men's Bamboo Tee- Dark Grey T-shirt",
                },
              },
              {
                id: '5020-sku',
                contentEntry: {
                  content: 'BAMTSDG02--S',
                },
              },
              {
                id: '5020-price',
                contentEntry: {
                  content: 899,
                },
              },
              {
                id: '5020-size',
                contentEntry: {
                  content: 'S',
                },
              },
              {
                id: '5020-quantity',
                contentEntry: {
                  content: 1,
                },
              },
              {
                id: '5020-permalink',
                contentEntry: {
                  content: (
                    <a
                      href="https://woodwose.in/product/mens-bamboo-dark-grey-t-shirt/?attribute_pa_size=s"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Click here to view the product on our website
                    </a>
                  ),
                },
              },
            ],
          },
          {
            id: 5019,
            colData: [
              {
                id: '5019-sku',
                contentEntry: {
                  content: 'BAMTSDG02--M',
                },
              },
              {
                id: '5019-price',
                contentEntry: {
                  content: 899,
                },
              },
              {
                id: '5019-size',
                contentEntry: {
                  content: 'M',
                },
              },
              {
                id: '5019-quantity',
                contentEntry: {
                  content: 2,
                },
              },
              {
                id: '5019-permalink',
                contentEntry: {
                  content: (
                    <a
                      href="https://woodwose.in/product/mens-bamboo-dark-grey-t-shirt/?attribute_pa_size=m"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Click here to view the product on our website
                    </a>
                  ),
                },
              },
            ],
          },
          {
            id: 5031,
            colData: [
              {
                id: '5031-name',
                contentEntry: {
                  rowSpan: 2,
                  content: "Women's Bamboo Tank Top-Dark Grey",
                },
              },
              {
                id: '5031-sku',
                contentEntry: {
                  content: 'BAMTSDG02--S',
                },
              },
              {
                id: '5031-price',
                contentEntry: {
                  content: 899,
                },
              },
              {
                id: '5031-size',
                contentEntry: {
                  content: 'S',
                },
              },
              {
                id: '5031-quantity',
                contentEntry: {
                  content: 1,
                },
              },
              {
                id: '5031-permalink',
                contentEntry: {
                  content: (
                    <a
                      href="http://google.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Click here to view the product on our website
                    </a>
                  ),
                },
              },
            ],
          },
          {
            id: 5032,
            colData: [
              {
                id: '5032-sku',
                contentEntry: {
                  content: 'BAMTSDG02--M',
                },
              },
              {
                id: '5032-price',
                contentEntry: {
                  content: 899,
                },
              },
              {
                id: '5032-size',
                contentEntry: {
                  content: 'M',
                },
              },
              {
                id: '5032-quantity',
                contentEntry: {
                  content: 2,
                },
              },
              {
                id: '5032-permalink',
                contentEntry: {
                  content: (
                    <a
                      href="https://woodwose.in/product/mens-bamboo-dark-grey-t-shirt/?attribute_pa_size=m"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Click here to view the product on our website
                    </a>
                  ),
                },
              },
            ],
          },
        ]}
      />
    </>
  )
}
