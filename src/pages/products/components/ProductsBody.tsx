import { Button } from '@components/ui'
import type { TProduct } from '@slices/productsSlice'
import { PlusCircleIcon, RefreshCcw } from 'lucide-react'
import type { FC } from 'react'
import { ProductsTable } from './ProductsTable/ProductsTable'
import { columnsNames } from './ProductsTable/const'

type TProps = {}

export const ProductsBody: FC<TProps> = (props) => {
  const {} = props

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
          <ProductsTable columns={columnsNames} data={mock_data} />
        </div>
      </div>
    </div>
  )
}
const mock_data: TProduct[] = [
  {
    articleNumber: 'KFANJSNW124$FWE',
    category: 'smart',
    name: 'vivo',
    id: 1,
    price: 1241242.22,
    rating: 4.3,
    vendor: 'china',
  },
  {
    articleNumber: 'KFANJSNW124$FWE',
    category: 'smart',
    name: 'vivo',
    id: 1,
    price: 1241242.22,
    rating: 4.3,
    vendor: 'china',
  },
  {
    articleNumber: 'KFANJSNW124$FWE',
    category: 'smart',
    name: 'vivo',
    id: 1,
    price: 1241242.22,
    rating: 4.3,
    vendor: 'china',
  },
  {
    articleNumber: 'KFANJSNW124$FWE',
    category: 'smart',
    name: 'vivo',
    id: 1,
    price: 1241242.22,
    rating: 4.3,
    vendor: 'china',
  },
  {
    articleNumber: 'KFANJSNW124$FWE',
    category: 'smart',
    name: 'vivo',
    id: 1,
    price: 1241242.22,
    rating: 4.3,
    vendor: 'china',
  },
  {
    articleNumber: 'KFANJSNW124$FWE',
    category: 'smart',
    name: 'vivo',
    id: 1,
    price: 1241242.22,
    rating: 4.3,
    vendor: 'china',
  },
  {
    articleNumber: 'KFANJSNW124$FWE',
    category: 'smart',
    name: 'vivo',
    id: 1,
    price: 1241242.22,
    rating: 4.3,
    vendor: 'china',
  },
  {
    articleNumber: 'KFANJSNW124$FWE',
    category: 'smart',
    name: 'vivo',
    id: 1,
    price: 1241242.22,
    rating: 4.3,
    vendor: 'china',
  },
  {
    articleNumber: 'KFANJSNW124$FWE',
    category: 'smart',
    name: 'vivo',
    id: 1,
    price: 1241242.22,
    rating: 4.3,
    vendor: 'china',
  },
  {
    articleNumber: 'KFANJSNW124$FWE',
    category: 'smart',
    name: 'vivo',
    id: 1,
    price: 1241242.22,
    rating: 4.3,
    vendor: 'china',
  },
  {
    articleNumber: 'KFANJSNW124$FWE',
    category: 'smart',
    name: 'vivo',
    id: 1,
    price: 1241242.22,
    rating: 4.3,
    vendor: 'china',
  },
  {
    articleNumber: 'KFANJSNW124$FWE',
    category: 'smart',
    name: 'vivo',
    id: 1,
    price: 1241242.22,
    rating: 4.3,
    vendor: 'china',
  },
  {
    articleNumber: 'KFANJSNW124$FWE',
    category: 'smart',
    name: 'vivo',
    id: 1,
    price: 1241242.22,
    rating: 4.3,
    vendor: 'china',
  },
]
