import { api } from '@/lib'
import type { SORT_TYPES } from '@slices/productsSlice'
import type { AxiosResponse } from 'axios'
import type { TProductsResponse } from './types'

export const getProductsBySort = async (sortType: SORT_TYPES, sortField: string, limit: number, page: number) => {
  const skipElements = page * limit

  try {
    const response: AxiosResponse<TProductsResponse> = await api.get(
      `/products?limit=${limit}&skip=${skipElements}&sortBy=${sortField}&order=${sortType}&select=title,price,rating,category,brand,sku,thumbnail`,
    )

    return response.data
  } catch (e) {
    throw e
  }
}
