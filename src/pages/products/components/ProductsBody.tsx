import { Button } from '@components/ui'
import { useAppDispatch, useAppSelector } from '@hooks'
import { getProductsList, getProductsLoading, productsActions } from '@slices/productsSlice'
import { RefreshCcw } from 'lucide-react'
import { type FC } from 'react'
import { AddProductDialog } from './AddProductDialog'
import { ProductsTable } from './ProductsTable/ProductsTable'
import { columnsNames } from './ProductsTable/columns'

type TProps = {}

export const ProductsBody: FC<TProps> = (props) => {
  const {} = props

  const dispatch = useAppDispatch()

  const products = useAppSelector(getProductsList)
  const productsIsLoading = useAppSelector(getProductsLoading)

  return (
    <div className="bg-background h-max  max-h-full rounded-t-xl p-7.5 flex-1">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Все позиции</h2>
          <div className="flex gap-2">
            <Button
              className="flex items-center"
              variant={'outline'}
              onClick={() => {
                dispatch(productsActions.resetState())
              }}
            >
              <RefreshCcw />
            </Button>

            <AddProductDialog />
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
