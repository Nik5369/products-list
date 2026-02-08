import { configureStore } from '@reduxjs/toolkit'
import { productsReducer } from '@slices/productsSlice'
import { enableMapSet } from 'immer'
import type { TStoreSchema } from './StoreSchema'

enableMapSet()

export const store = configureStore<TStoreSchema>({
  reducer: {
    products: productsReducer,
  },
})

export type TAppDispatch = typeof store.dispatch
