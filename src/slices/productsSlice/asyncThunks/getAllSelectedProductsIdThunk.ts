import { getSelectedProductIds, type TProductsIdsResponse } from '@api'
import { createAsyncThunk } from '@reduxjs/toolkit'
import type { AxiosError } from 'axios'

export const getAllSelectedProductsIdThunk = createAsyncThunk<TProductsIdsResponse, string, { rejectValue: string }>(
  'products/getAllSelectedProductsIds',
  async (searchText, { rejectWithValue }) => {
    try {
      const response = await getSelectedProductIds(searchText)
      return response
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>
      const message = err.response?.data?.message ?? 'Не удалось загрузить выбранные товары'
      return rejectWithValue(message)
    }
  },
)
