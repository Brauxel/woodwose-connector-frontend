import {
  createTableHolderRowDataFromInventory,
  extractTitlesFromInventory,
} from '../../../utils/dataUtils/wooCommerceDataUtils/wooCommerceProductUtils'
import { productsData } from '../../../utils/testUtils/mockData/WooCommerceInventory/ProductData'
import { TableHolder } from '../../shared/organisms/TableHolder'

export const WooCommerceInventory = () => {
  return (
    <>
      <TableHolder
        titles={extractTitlesFromInventory(productsData)}
        rowData={createTableHolderRowDataFromInventory(productsData)}
      />
    </>
  )
}
