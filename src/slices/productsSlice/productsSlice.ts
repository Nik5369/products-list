import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { TProductsIdsResponse, TProductsResponse } from '../../api'
import { getAllSelectedProductsIdThunk } from './asyncThunks/getAllSelectedProductsIdThunk'
import { getProductsThunk } from './asyncThunks/getProductsThunk'
import type { TProductsSchema } from './types/productsSchema'

const initialState: TProductsSchema = {
  products: [],
  page: 0,
  sort: {
    sortField: '',
    sortType: null,
  },
  mainCheckbox: false,
  totalCount: 0,
  isLoading: false,
  selectedCheckboxes: new Set(),
  searchText: '',
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSort(state, { payload }: PayloadAction<string>) {
      if (payload !== state.sort.sortField) {
        state.sort.sortField = payload
        state.sort.sortType = 'desc'
      } else if (state.sort.sortType === 'desc') {
        state.sort.sortType = 'asc'
      } else {
        state.sort.sortField = ''
        state.sort.sortType = null
      }
      state.page = 0
    },
    offMainCheckbox(state) {
      state.mainCheckbox = false
      state.selectedCheckboxes = new Set()
    },
    toggleCheckbox(state, { payload }: PayloadAction<number>) {
      if (state.selectedCheckboxes.has(payload)) {
        state.selectedCheckboxes.delete(payload)
        if (!state.selectedCheckboxes.size) {
          state.mainCheckbox = false
        }
      } else {
        state.selectedCheckboxes.add(payload)
      }
    },
    setSearchText(state, { payload }: PayloadAction<string>) {
      state.searchText = payload
      state.page = 0
    },
    setPage(state, { payload }: PayloadAction<number>) {
      state.page = payload
    },
    resetState() {
      return initialState
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsThunk.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getProductsThunk.fulfilled, (state, { payload }: PayloadAction<TProductsResponse>) => {
      state.products = payload.products
      state.totalCount = payload.total
      state.isLoading = false
    })
    builder.addCase(getProductsThunk.rejected, (state) => {
      state.isLoading = false
    })

    builder.addCase(getAllSelectedProductsIdThunk.fulfilled, (state, { payload }: PayloadAction<TProductsIdsResponse>) => {
      const newSelectedCheckBoxes = new Set<number>()
      payload.products.forEach((product) => newSelectedCheckBoxes.add(product.id))
      state.selectedCheckboxes = newSelectedCheckBoxes
      state.mainCheckbox = true
    })
    // builder.addCase(getAllSelectedProductsIdThunk.rejected, (state) => {
    //   //добавить  toast, если не прошло
    // })
  },
})

export const { actions: productsActions } = productsSlice
export const { reducer: productsReducer } = productsSlice
