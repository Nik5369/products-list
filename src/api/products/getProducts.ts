import { api } from '@/lib'
import type { AxiosResponse } from 'axios'
import type { TProductsResponse } from './types'

export const getProducts = async (limit: number, page: number) => {
  const skipElements = page * limit

  try {
    const response: AxiosResponse<TProductsResponse> = await api.get(
      `/products?select=title,price,rating,category,brand,sku,thumbnail&limit=${limit}&skip=${skipElements}`,
    )

    return response.data
  } catch (e) {
    throw e
  }
}
