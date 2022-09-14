import { RowDataType } from '../../../../components/shared/organisms/TableHolder'
import { productsData } from '../../../testUtils/mockData/WooCommerceInventory/ProductData'
import { createTableHolderRowDataFromInventory } from '../wooCommerceProductUtils'

const rowsData: RowDataType[] = [
  {
    id: 5020,
    colData: [
      {
        id: '5015-name',
        contentEntry: {
          rowSpan: 5,
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
          content: '899',
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
          content:
            'https://woodwose.in/product/mens-bamboo-dark-grey-t-shirt/?attribute_pa_size=s',
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
          content: '899',
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
          content:
            'https://woodwose.in/product/mens-bamboo-dark-grey-t-shirt/?attribute_pa_size=m',
        },
      },
    ],
  },
  {
    id: 5018,
    colData: [
      {
        id: '5018-sku',
        contentEntry: {
          content: 'BAMTSDG02--L',
        },
      },
      {
        id: '5018-price',
        contentEntry: {
          content: '999',
        },
      },
      {
        id: '5018-size',
        contentEntry: {
          content: 'L',
        },
      },
      {
        id: '5018-quantity',
        contentEntry: {
          content: 1,
        },
      },
      {
        id: '5018-permalink',
        contentEntry: {
          content:
            'https://woodwose.in/product/mens-bamboo-dark-grey-t-shirt/?attribute_pa_size=l',
        },
      },
    ],
  },
  {
    id: 5017,
    colData: [
      {
        id: '5017-sku',
        contentEntry: {
          content: 'BAMTSDG02--XL',
        },
      },
      {
        id: '5017-price',
        contentEntry: {
          content: '899',
        },
      },
      {
        id: '5017-size',
        contentEntry: {
          content: 'XL',
        },
      },
      {
        id: '5017-quantity',
        contentEntry: {
          content: 2,
        },
      },
      {
        id: '5017-permalink',
        contentEntry: {
          content:
            'https://woodwose.in/product/mens-bamboo-dark-grey-t-shirt/?attribute_pa_size=xl',
        },
      },
    ],
  },
  {
    id: 5016,
    colData: [
      {
        id: '5016-sku',
        contentEntry: {
          content: 'BAMTSDG02--XXL',
        },
      },
      {
        id: '5016-price',
        contentEntry: {
          content: '899',
        },
      },
      {
        id: '5016-size',
        contentEntry: {
          content: 'XXL',
        },
      },
      {
        id: '5016-quantity',
        contentEntry: {
          content: 3,
        },
      },
      {
        id: '5016-permalink',
        contentEntry: {
          content:
            'https://woodwose.in/product/mens-bamboo-dark-grey-t-shirt/?attribute_pa_size=xxl',
        },
      },
    ],
  },
  {
    id: 5031,
    colData: [
      {
        id: '5030-name',
        contentEntry: {
          rowSpan: 5,
          content: "Women's Bamboo Tank Top-Dark Grey",
        },
      },
      {
        id: '5031-sku',
        contentEntry: {
          content: 'ZAMTSDG02--S',
        },
      },
      {
        id: '5031-price',
        contentEntry: {
          content: '1099',
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
          content:
            'https://woodwose.in/product/womens-bamboo-dark-grey-t-shirt/?attribute_pa_size=s',
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
          content: 'ZAMTSDG02--M',
        },
      },
      {
        id: '5032-price',
        contentEntry: {
          content: '1099',
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
          content:
            'https://woodwose.in/product/womens-bamboo-dark-grey-t-shirt/?attribute_pa_size=m',
        },
      },
    ],
  },
  {
    id: 5033,
    colData: [
      {
        id: '5033-sku',
        contentEntry: {
          content: 'ZAMTSDG02--L',
        },
      },
      {
        id: '5033-price',
        contentEntry: {
          content: '1099',
        },
      },
      {
        id: '5033-size',
        contentEntry: {
          content: 'L',
        },
      },
      {
        id: '5033-quantity',
        contentEntry: {
          content: 1,
        },
      },
      {
        id: '5033-permalink',
        contentEntry: {
          content:
            'https://woodwose.in/product/womens-bamboo-dark-grey-t-shirt/?attribute_pa_size=l',
        },
      },
    ],
  },
  {
    id: 5034,
    colData: [
      {
        id: '5034-sku',
        contentEntry: {
          content: 'ZAMTSDG02--XL',
        },
      },
      {
        id: '5034-price',
        contentEntry: {
          content: '1099',
        },
      },
      {
        id: '5034-size',
        contentEntry: {
          content: 'XL',
        },
      },
      {
        id: '5034-quantity',
        contentEntry: {
          content: 2,
        },
      },
      {
        id: '5034-permalink',
        contentEntry: {
          content:
            'https://woodwose.in/product/womens-bamboo-dark-grey-t-shirt/?attribute_pa_size=xl',
        },
      },
    ],
  },
  {
    id: 5035,
    colData: [
      {
        id: '5035-sku',
        contentEntry: {
          content: 'ZAMTSDG02--XXL',
        },
      },
      {
        id: '5035-price',
        contentEntry: {
          content: '1099',
        },
      },
      {
        id: '5035-size',
        contentEntry: {
          content: 'XXL',
        },
      },
      {
        id: '5035-quantity',
        contentEntry: {
          content: 3,
        },
      },
      {
        id: '5035-permalink',
        contentEntry: {
          content:
            'https://woodwose.in/product/womens-bamboo-dark-grey-t-shirt/?attribute_pa_size=xxl',
        },
      },
    ],
  },
]

describe('ProductData', () => {
  it('should create table holder data', () => {
    const result = createTableHolderRowDataFromInventory(productsData)

    expect(result).toStrictEqual(rowsData)
  })
})
