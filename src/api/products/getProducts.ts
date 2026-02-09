import { api } from '@/lib'
import type { SORT_TYPES } from '@slices/productsSlice'
import type { AxiosResponse } from 'axios'
import { PRODUCTS_LIMIT_ON_PAGE } from '../../slices/productsSlice/const/const'
import type { TProductsResponse } from './types'

type TProps = {
  sortType?: SORT_TYPES | null
  sortField?: string
  page: number
  searchText?: string
}

export const getProducts = async (props: TProps) => {
  const { page, searchText, sortField, sortType } = props

  const skipElements = page * PRODUCTS_LIMIT_ON_PAGE

  try {
    const response: AxiosResponse<TProductsResponse> = await api.get('/products/search', {
      params: {
        q: searchText,
        limit: PRODUCTS_LIMIT_ON_PAGE,
        skip: skipElements,
        sortBy: sortField,
        order: sortType,
        select: 'title,price,rating,category,brand,sku,thumbnail',
      },
    })
    return response.data
  } catch (e) {
    throw e
  }
}
