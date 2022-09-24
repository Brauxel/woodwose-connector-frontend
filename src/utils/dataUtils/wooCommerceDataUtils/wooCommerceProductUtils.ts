import { keys, remove } from 'lodash'
import {
  ColDataType,
  RowDataType,
} from '../../../components/shared/organisms/TableHolder'
import { ProductData, ProductVariations } from '../../../types/products'

export const extractTitlesFromInventory = (productsData: ProductData[]) => {
  const tableTitles = remove(['Name', ...keys(productsData[0].variations[0])])
  remove(tableTitles, (n) => n === 'id')

  return tableTitles
}

export const createTableHolderRowDataFromInventory = (
  productsData: ProductData[]
) => {
  const tableData: RowDataType[] = []

  if (productsData.length < 1) return tableData

  for (let i = 0; i < productsData.length; i++) {
    tableData.push({
      id: productsData[i].variations[0].id,
      colData: [
        ...addVariationInformationToColData(
          [
            {
              id: productsData[i].id + '-name',
              contentEntry: {
                rowSpan: productsData[i].variations.length,
                content: productsData[i].name,
              },
            },
          ],
          productsData[i].variations[0]
        ),
      ],
    })

    for (let j = 1; j < productsData[0].variations.length; j++) {
      tableData.push({
        id: productsData[i].variations[j].id,
        colData: [
          ...addVariationInformationToColData(
            [],
            productsData[i].variations[j]
          ),
        ],
      })
    }
  }

  return tableData
}

export const addVariationInformationToColData = (
  colData: ColDataType[],
  variation: ProductVariations
) => {
  const { id, sku, price, size, quantity, permalink } = variation

  colData.push(
    {
      id: id + '-sku',
      contentEntry: {
        content: sku,
      },
    },
    {
      id: id + '-price',
      contentEntry: {
        content: price,
      },
    },
    {
      id: id + '-size',
      contentEntry: {
        content: size,
      },
    },
    {
      id: id + '-quantity',
      contentEntry: {
        content: quantity,
      },
    },
    {
      id: id + '-permalink',
      contentEntry: {
        content: permalink,
      },
    }
  )

  return colData
}
