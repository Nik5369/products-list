import { getProducts, type TProductsResponse } from '@api'
import { createAsyncThunk } from '@reduxjs/toolkit'
import type { SORT_TYPES } from '../types/productsSchema'

type TProps = {
  sortType: SORT_TYPES | null
  sortField?: string
  page: number
  searchText?: string
}

export const getProductsThunk = createAsyncThunk<TProductsResponse, TProps>('products/getProducts', async (props) => {
  try {
    const {} = props
    const response = await getProducts(props)

    return response
  } catch (error) {
    throw Error
  }
})
