import { configureStore } from '@reduxjs/toolkit'
import { productsReducer } from '@slices/productsSlice'
import { userReducer } from '@slices/userSlice'
import { enableMapSet } from 'immer'
import type { TStoreSchema } from './StoreSchema'

enableMapSet()

export const store = configureStore<TStoreSchema>({
  reducer: {
    products: productsReducer,
    user: userReducer,
  },
})

export type TAppDispatch = typeof store.dispatch
