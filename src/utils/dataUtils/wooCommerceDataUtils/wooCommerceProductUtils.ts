import { keys, remove } from 'lodash'
// import { RowDataType } from '../../../components/shared/organisms/TableHolder'
import { ProductData } from '../../../types/products'

export const extractTitlesFromInventory = (productsData: ProductData[]) => {
  const tableTitles = remove(['Name', ...keys(productsData[0].variations[0])])
  remove(tableTitles, (n) => n === 'id')

  return tableTitles
}

export const createTableHolderRowDataFromInventory = (
  productsData: ProductData[]
) => {
  let tableData

  productsData.map(({ name, id, variations }) => {
    tableData = {
      id,
      colData: [
        {
          id: `${id + 'name'}`,
          contentEntry: {
            rowSpan: 2,
            content: name,
          },
        },
      ],
    }

    return tableData
  })

  return tableData
}
