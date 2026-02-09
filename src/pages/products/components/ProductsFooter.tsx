import { useAppSelector } from '@hooks'
import { getCurrentPage, getTotalCount } from '@slices/productsSlice'
import { PRODUCTS_LIMIT_ON_PAGE } from '@slices/productsSlice/const/const'
import type { FC } from 'react'
import { ProductsPagination } from './ProductsPagination'

type TProps = {}

export const ProductsFooter: FC<TProps> = (props) => {
  const {} = props
  const totalCount = useAppSelector(getTotalCount)
  const currentPage = useAppSelector(getCurrentPage)

  const start = currentPage * PRODUCTS_LIMIT_ON_PAGE + 1
  const end = currentPage * PRODUCTS_LIMIT_ON_PAGE + PRODUCTS_LIMIT_ON_PAGE

  return (
    <div className="flex justify-between pb-13 px-7.5 bg-background">
      <div className="text-lg font-medium text-gray-500">
        Показано{' '}
        <span className="text-foreground">
          {start}-{end < totalCount ? end : totalCount}
        </span>{' '}
        из <span className="text-foreground">{totalCount}</span>
      </div>
      <ProductsPagination />
    </div>
  )
}
