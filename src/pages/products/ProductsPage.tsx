import { useAppDispatch, useAppSelector } from '@hooks'
import { getCurrentPage, getProductsThunk, getSearchText, getSortData } from '@slices/productsSlice'
import { useEffect } from 'react'
import { ProductsBody } from './components/ProductsBody'
import { ProductsFooter } from './components/ProductsFooter'
import { ProductsHeader } from './components/ProductsHeader'

export const ProductsPage = () => {
  const dispatch = useAppDispatch()

  const page = useAppSelector(getCurrentPage)
  const searchText = useAppSelector(getSearchText)
  const { sortField, sortType } = useAppSelector(getSortData)

  useEffect(() => {
    dispatch(getProductsThunk({ page, sortField, sortType, searchText }))
  }, [searchText, sortType, sortField, page])

  return (
    <div className=" h-screen overflow-hidden flex flex-col   ">
      <ProductsHeader />

      <ProductsBody />

      <ProductsFooter />
    </div>
  )
}
