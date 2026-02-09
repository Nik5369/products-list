import type { TProductsSchema } from '@slices/productsSlice'
import type { TUserSchema } from '@slices/userSlice'

export interface TStoreSchema {
  products: TProductsSchema
  user: TUserSchema
}
