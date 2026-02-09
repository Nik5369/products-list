export { getAllSelectedProductsIdThunk } from './asyncThunks/getAllSelectedProductsIdThunk'

export {
  getCurrentPage,
  getMainCheckboxState,
  getProductsList,
  getProductsLoading,
  getSearchText,
  getSelectedCheckboxes,
  getSortData,
  getTotalCount,
} from './selectors/productsSelectors'

export { productsActions, productsReducer } from './productsSlice'

export { getProductsThunk } from './asyncThunks/getProductsThunk'

export { type TProduct } from './types/product'
export type { SORT_TYPES, TProductsSchema } from './types/productsSchema'
