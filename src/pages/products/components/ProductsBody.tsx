import { Button } from '@components/ui'
import { useAppDispatch, useAppSelector } from '@hooks'
import {
  getCurrentPage,
  getProductsBySortThunk,
  getProductsList,
  getProductsLoading,
  getProductsThunk,
  getSortData,
} from '@slices/productsSlice'
import { PlusCircleIcon, RefreshCcw } from 'lucide-react'
import { useEffect, type FC } from 'react'
import { ProductsTable } from './ProductsTable/ProductsTable'
import { columnsNames } from './ProductsTable/columns'

type TProps = {}

export const ProductsBody: FC<TProps> = (props) => {
  const {} = props
  const dispatch = useAppDispatch()

  const page = useAppSelector(getCurrentPage)
  const products = useAppSelector(getProductsList)
  const productsIsLoading = useAppSelector(getProductsLoading)
  const { sortField, sortType } = useAppSelector(getSortData)

  useEffect(() => {
    if (sortType !== null) {
      dispatch(getProductsBySortThunk({ page, sortField, sortType }))
    } else {
      dispatch(getProductsThunk(page))
    }
  }, [sortType])

  return (
    <div className="bg-background h-max  max-h-full rounded-t-xl p-7.5 flex-1">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Все позиции</h2>
          <div className="flex gap-2">
            <Button className="flex items-center" variant={'outline'}>
              <RefreshCcw />
            </Button>
            <Button className="flex items-center gap-1.5">
              <PlusCircleIcon size={22} />
              <p className="font-semibold text-l">Добавить</p>
            </Button>
          </div>
        </div>
        <div className="">
          {' '}
          <ProductsTable columns={columnsNames} data={products} loadingData={productsIsLoading} />
        </div>
      </div>
    </div>
  )
}
