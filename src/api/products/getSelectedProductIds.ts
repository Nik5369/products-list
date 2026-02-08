import { api } from '@/lib'
import type { AxiosResponse } from 'axios'
import type { TProductsIdsResponse } from './types'

export const getSelectedProductIds = async (searchText = '') => {
  try {
    const response: AxiosResponse<TProductsIdsResponse> = await api.get(`/products/search?q=${searchText}&select=id&limit=0`)

    return response.data
  } catch (e) {
    throw e
  }
}
