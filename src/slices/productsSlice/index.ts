export { getProductsBySortThunk } from './asyncThunks/getProductsBySortThunk'

export { getAllSelectedProductsIdThunk } from './asyncThunks/getAllSelectedProductsIdThunk'

export {
  getCounterTotalCount,
  getCurrentPage,
  getMainCheckboxState,
  getProductsList,
  getProductsLoading,
  getSearchText,
  getSelectedCheckboxes,
  getSortData,
} from './selectors/productsSelectors'

export { productsActions, productsReducer } from './productsSlice'

export { getProductsThunk } from './asyncThunks/getProductsThunk'

export { type TProduct } from './types/product'
export type { SORT_TYPES, TProductsSchema } from './types/productsSchema'
