import { configureStore } from '@reduxjs/toolkit'
import type { TStoreSchema } from './StoreSchema'

export const store = configureStore<TStoreSchema>({
  reducer: {},
})

export type TAppDispatch = typeof store.dispatch
