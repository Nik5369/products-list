import { type TStoreSchema } from '@providers/StoreProvider'
import { createSelector } from '@reduxjs/toolkit'

const getProducts = (state: TStoreSchema) => state.products

export const getCounterTotalCount = createSelector(getProducts, (products) => products.totalCount)
export const getProductsList = createSelector(getProducts, (products) => products.products)
export const getMainCheckboxState = createSelector(getProducts, (products) => products.mainCheckbox)
export const getCurrentPage = createSelector(getProducts, (products) => products.page)
export const getSelectedCheckboxes = createSelector(getProducts, (products) => products.selectedCheckboxes)
export const getSearchText = createSelector(getProducts, (products) => products.searchText)
export const getProductsLoading = createSelector(getProducts, (products) => products.isLoading)
export const getSortData = createSelector(getProducts, (products) => products.sort)
