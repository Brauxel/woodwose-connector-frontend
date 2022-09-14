import { keys, remove } from 'lodash'
import { RowDataType } from '../../../components/shared/organisms/TableHolder'
import { ProductData } from '../../../types/products'

export const extractTitlesFromInventory = (productsData: ProductData[]) => {
  const tableTitles = remove(['Name', ...keys(productsData[0].variations[0])])
  remove(tableTitles, (n) => n === 'id')

  return tableTitles
}

export const createTableHolderRowDataFromInventory = (
  productsData: ProductData[]
) => {
  const tableData: RowDataType[] = []

  for (let i = 0; i < productsData.length; i++) {
    tableData.push({
      id: productsData[i].variations[0].id,
      colData: [
        {
          id: productsData[i].id + '-name',
          contentEntry: {
            rowSpan: 5,
            content: productsData[i].name,
          },
        },
        {
          id: productsData[i].variations[0].id + '-sku',
          contentEntry: {
            content: productsData[i].variations[0].sku,
          },
        },
        {
          id: productsData[i].variations[0].id + '-price',
          contentEntry: {
            content: productsData[i].variations[0].price,
          },
        },
        {
          id: productsData[i].variations[0].id + '-size',
          contentEntry: {
            content: productsData[i].variations[0].size,
          },
        },
        {
          id: productsData[i].variations[0].id + '-quantity',
          contentEntry: {
            content: productsData[i].variations[0].quantity,
          },
        },
        {
          id: productsData[i].variations[0].id + '-permalink',
          contentEntry: {
            content: productsData[i].variations[0].permalink,
          },
        },
      ],
    })

    for (let j = 1; j < productsData[0].variations.length; j++) {
      tableData.push({
        id: productsData[i].variations[j].id,
        colData: [
          {
            id: productsData[i].variations[j].id + '-sku',
            contentEntry: { content: productsData[i].variations[j].sku },
          },
          {
            id: productsData[i].variations[j].id + '-price',
            contentEntry: { content: productsData[i].variations[j].price },
          },
          {
            id: productsData[i].variations[j].id + '-size',
            contentEntry: { content: productsData[i].variations[j].size },
          },
          {
            id: productsData[i].variations[j].id + '-quantity',
            contentEntry: { content: productsData[i].variations[j].quantity },
          },
          {
            id: productsData[i].variations[j].id + '-permalink',
            contentEntry: { content: productsData[i].variations[j].permalink },
          },
        ],
      })
    }
  }

  return tableData
}
