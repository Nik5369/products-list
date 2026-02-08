import { getProductsBySort, type TProductsResponse } from '@api'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { PRODUCTS_LIMIT_ON_PAGE } from '../const/const'
import type { SORT_TYPES } from '../types/productsSchema'

type TProps = {
  sortType: SORT_TYPES
  sortField: string
  page: number
}

export const getProductsBySortThunk = createAsyncThunk<TProductsResponse, TProps>(
  'products/getProductsBySort',
  async ({ page, sortField, sortType }) => {
    try {
      const response = await getProductsBySort(sortType, sortField, PRODUCTS_LIMIT_ON_PAGE, page)

      return response
    } catch (error) {
      throw Error
    }
  },
)
