import type { TProduct } from './product'

export type SORT_TYPES = 'asc' | 'desc'

export type TProductsSchema = {
  products: TProduct[]
  sort: {
    sortField: string
    sortType: SORT_TYPES | null
  }
  page: number
  mainCheckbox: boolean
  totalCount: number
  isLoading: boolean
  selectedCheckboxes: Set<number>
  searchText: string
}
