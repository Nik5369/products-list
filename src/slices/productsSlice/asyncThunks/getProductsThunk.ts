import { getProducts, type TProductsResponse } from '@api'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { PRODUCTS_LIMIT_ON_PAGE } from '../const/const'

export const getProductsThunk = createAsyncThunk<TProductsResponse, number>('products/getProducts', async (page) => {
  try {
    const response = await getProducts(PRODUCTS_LIMIT_ON_PAGE, page)

    return response
  } catch (error) {
    throw Error
  }
})
