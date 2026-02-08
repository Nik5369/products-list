import { getSelectedProductIds, type TProductsIdsResponse } from '@api'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getAllSelectedProductsIdThunk = createAsyncThunk<TProductsIdsResponse, string>(
  'products/getAllSelectedProductsIds',
  async (searchText) => {
    try {
      const response = await getSelectedProductIds(searchText)

      return response
    } catch (error) {
      throw Error
    }
  },
)
