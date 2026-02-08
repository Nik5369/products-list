import { Checkbox } from '@components/ui'
import { useAppDispatch, useAppSelector } from '@hooks'
import { cn } from '@lib'
import { getAllSelectedProductsIdThunk, productsActions, type TProduct } from '@slices/productsSlice'
import { getMainCheckboxState, getSearchText, getSelectedCheckboxes, getSortData } from '@slices/productsSlice/selectors/productsSelectors'
import type { ColumnDef } from '@tanstack/react-table'
import { ChevronDown, ChevronUp, CircleEllipsis } from 'lucide-react'

// сделаем вид, как будто декомпозировал))))

export const columnsNames: ColumnDef<TProduct>[] = [
  {
    accessorKey: 'checkbox',
    header: () => {
      const dispatch = useAppDispatch()
      const mainCheckboxIsActive = useAppSelector(getMainCheckboxState)
      const searchText = useAppSelector(getSearchText)

      const toggleMainCheckbox = () => {
        if (mainCheckboxIsActive) {
          dispatch(productsActions.offMainCheckbox())
        } else {
          dispatch(getAllSelectedProductsIdThunk(searchText))
        }
      }

      return <Checkbox className="w-5.5 h-5.5" onClick={toggleMainCheckbox} checked={mainCheckboxIsActive} />
    },
    cell: ({ row }) => {
      const dispatch = useAppDispatch()

      const alternativeCheckboxesList = useAppSelector(getSelectedCheckboxes)

      const toggleCheckbox = () => {
        dispatch(productsActions.toggleCheckbox(row.original.id))
      }

      return (
        <>
          {alternativeCheckboxesList.has(row.original.id) && <div className="w-0.5 h-full bg-row-active absolute top-0 left-0"></div>}
          <Checkbox className="w-5.5 h-5.5" onClick={toggleCheckbox} checked={alternativeCheckboxesList.has(row.original.id)} />
        </>
      )
    },
  },
  {
    accessorKey: 'title',
    header: () => <p className="text-regular text-base text-gray-500">Наименование</p>,
    cell: ({ row }) => (
      <div className="flex items-center gap-3 relative">
        <img className="w-12 h-12 bg-gray-200 rounded shrink-0" alt="product logo" src={row.original.thumbnail} />
        <div>
          <p className="font-bold text-base">{row.original.title}</p>
          <p className="text-regular text-sm text-gray-500">{row.original.category}</p>
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'brand',
    header: () => <p className="text-regular text-base text-gray-500">Вендор</p>,
    cell: ({ row }) => <p className="font-bold text-base">{row.original.brand}</p>,
  },

  {
    accessorKey: 'sku',
    header: () => <p className="cursor-pointer text-regular text-base text-gray-500">Артикул</p>,
    cell: ({ row }) => <p className="font-regular text-base">{row.original.sku}</p>,
  },
  {
    accessorKey: 'rating',
    header: ({ header }) => {
      const dispatch = useAppDispatch()

      const { sortField, sortType } = useAppSelector(getSortData)

      const toggleSort = () => {
        dispatch(productsActions.setSort(header.id))
      }
      return (
        <p className="flex justify-center cursor-pointer text-regular text-base text-gray-500" onClick={toggleSort}>
          {sortField === 'rating' && (sortType == 'asc' ? <ChevronDown /> : <ChevronUp />)} Оценка
        </p>
      )
    },
    cell: ({ row }) => (
      <p className="font-regular text-base">
        <span className={cn(row.original.rating < 4 && 'text-destructive')}>{row.original.rating.toFixed(1)}</span>
        /5
      </p>
    ),
  },
  {
    accessorKey: 'price',
    header: ({ header }) => {
      const dispatch = useAppDispatch()

      const { sortField, sortType } = useAppSelector(getSortData)

      const toggleSort = () => {
        dispatch(productsActions.setSort(header.id))
      }

      return (
        <p className="flex justify-center cursor-pointer text-regular text-base text-gray-500" onClick={toggleSort}>
          {sortField === 'price' && (sortType == 'asc' ? <ChevronDown /> : <ChevronUp />)} Цена, ₽
        </p>
      )
    },
    cell: ({ row }) => {
      const integerPart = Math.trunc(row.original.price)
      const fractionalPart = Math.trunc((row.original.price - integerPart) * 100)

      return (
        <p className="font-regular text-base">
          {integerPart}
          {fractionalPart !== 0 && <span className="text-gray-500">, {fractionalPart}</span>}
        </p>
      )
    },
  },
  {
    accessorKey: 'features',
    header: '',
    cell: () => (
      <div className="flex items-center gap-2 justify-end">
        <button className="px-4 py-1 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 cursor-pointer">+</button>
        <button className="p-1 hover:bg-gray-100 rounded cursor-pointer">
          <CircleEllipsis className="text-gray-400" />
        </button>
      </div>
    ),
  },
]
