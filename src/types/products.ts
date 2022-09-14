export interface ProductVariations {
  id: number
  sku: string
  price: string
  size: string
  quantity: number
  permalink: string
}

export interface ProductData {
  name: string
  id: number
  variations: ProductVariations[]
}
