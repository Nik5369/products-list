import type { TProduct } from '@slices/productsSlice'

export type TProductsResponse = {
  products: TProduct[]
  total: number
}

export type TProductsIdsResponse = {
  products: { id: number }[]
  total: number
}
