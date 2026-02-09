import { getProducts, type TProductsResponse } from '@api'
import { createAsyncThunk } from '@reduxjs/toolkit'
import type { AxiosError } from 'axios'
import type { SORT_TYPES } from '../types/productsSchema'

type TProps = {
  sortType: SORT_TYPES | null
  sortField?: string
  page: number
  searchText?: string
}

export const getProductsThunk = createAsyncThunk<TProductsResponse, TProps, { rejectValue: string }>(
  'products/getProducts',
  async (props, { rejectWithValue }) => {
    try {
      const response = await getProducts(props)
      return response
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>
      const message = err.response?.data?.message ?? 'Не удалось загрузить товары'
      return rejectWithValue(message)
    }
  },
)
