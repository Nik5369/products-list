import { Checkbox } from '@components/ui'
import { useAppDispatch, useAppSelector } from '@hooks'
import { cn } from '@lib'
import { getAllSelectedProductsIdThunk, productsActions, type TProduct } from '@slices/productsSlice'
import { getMainCheckboxState, getSearchText, getSelectedCheckboxes, getSortData } from '@slices/productsSlice/selectors/productsSelectors'
import type { ColumnDef } from '@tanstack/react-table'
import { ChevronDown, ChevronUp, CircleEllipsis } from 'lucide-react'
import type { FC } from 'react'

type TSortKey = 'rating' | 'price'

const MainCheckboxHeader: FC = () => {
  const dispatch = useAppDispatch()
  const mainCheckboxIsActive = useAppSelector(getMainCheckboxState)
  const searchText = useAppSelector(getSearchText)

  const handleToggleMainCheckbox = () => {
    if (mainCheckboxIsActive) {
      dispatch(productsActions.offMainCheckbox())
      return
    }

    dispatch(getAllSelectedProductsIdThunk(searchText))
  }

  return (
    <Checkbox
      className="w-5.5 h-5.5"
      onClick={handleToggleMainCheckbox}
      checked={mainCheckboxIsActive}
      aria-label="Выбрать все товары на странице"
    />
  )
}

type TRowCheckboxCellProps = {
  productId: number
}

const RowCheckboxCell: FC<TRowCheckboxCellProps> = ({ productId }) => {
  const dispatch = useAppDispatch()
  const selectedCheckboxes = useAppSelector(getSelectedCheckboxes)

  const isSelected = selectedCheckboxes.has(productId)

  const handleToggleCheckbox = () => {
    dispatch(productsActions.toggleCheckbox(productId))
  }

  return (
    <>
      {isSelected && <div className="w-0.5 h-full bg-row-active absolute top-0 left-0" />}
      <Checkbox className="w-5.5 h-5.5" onClick={handleToggleCheckbox} checked={isSelected} aria-label="Выбрать товар" />
    </>
  )
}

type TSortableHeaderProps = {
  columnId: string
  sortKey: TSortKey
  label: string
}

const SortableHeader: FC<TSortableHeaderProps> = ({ columnId, sortKey, label }) => {
  const dispatch = useAppDispatch()
  const { sortField, sortType } = useAppSelector(getSortData)

  const handleToggleSort = () => {
    dispatch(productsActions.setSort(columnId))
  }

  const isActive = sortField === sortKey
  const Icon = sortType === 'asc' ? ChevronDown : ChevronUp

  return (
    <button
      type="button"
      className="flex w-full justify-center items-center gap-1 cursor-pointer font-medium text-base text-gray-500"
      onClick={handleToggleSort}
    >
      {isActive && <Icon className="w-4 h-4" />}
      {label}
    </button>
  )
}

type TTitleCellProps = {
  product: TProduct
}

const TitleCell: FC<TTitleCellProps> = ({ product }) => {
  return (
    <div className="flex items-center gap-3 relative">
      <img className="w-12 h-12 bg-muted rounded shrink-0" alt="product logo" src={product.thumbnail} />
      <div>
        <p className="font-bold text-base">{product.title}</p>
        <p className="font-medium text-sm text-muted-foreground text-left">{product.category}</p>
      </div>
    </div>
  )
}

type TRatingCellProps = {
  rating: number
}

const RatingCell: FC<TRatingCellProps> = ({ rating }) => {
  const ratingText = rating.toFixed(1)
  const ratingClassName = cn(rating < 4 && 'text-destructive')

  return (
    <p className="font-regular text-base">
      <span className={ratingClassName}>{ratingText}</span>/5
    </p>
  )
}

type TPriceCellProps = {
  price: number
}

const PriceCell: FC<TPriceCellProps> = ({ price }) => {
  const integerPart = Math.trunc(price)
  const fractionalPart = Math.trunc((price - integerPart) * 100)

  const hasFractionalPart = fractionalPart !== 0

  return (
    <p className="font-regular text-base">
      {integerPart}
      {hasFractionalPart && <span className="text-muted-foreground">, {fractionalPart}</span>}
    </p>
  )
}

const ActionsCell: FC = () => {
  return (
    <div className="flex items-center gap-2 justify-end">
      <button
        type="button"
        className="px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm hover:bg-primary/90 cursor-pointer"
        aria-label="Добавить товар"
      >
        +
      </button>
      <button
        type="button"
        className="p-1 hover:bg-muted rounded cursor-pointer"
        aria-label="Дополнительные действия с товаром"
      >
        <CircleEllipsis className="text-muted-foreground" />
      </button>
    </div>
  )
}

export const columnsNames: ColumnDef<TProduct>[] = [
  {
    accessorKey: 'checkbox',
    header: () => <MainCheckboxHeader />,
    cell: ({ row }) => <RowCheckboxCell productId={row.original.id} />,
  },
  {
    accessorKey: 'title',
    header: () => <p className="font-medium text-base text-gray-500">Наименование</p>,
    cell: ({ row }) => <TitleCell product={row.original} />,
  },
  {
    accessorKey: 'brand',
    header: () => <p className="font-medium text-base text-gray-500">Вендор</p>,
    cell: ({ row }) => <p className="font-bold text-base">{row.original.brand}</p>,
  },
  {
    accessorKey: 'sku',
    header: () => <p className="font-medium text-base text-gray-500">Артикул</p>,
    cell: ({ row }) => <p className="font-regular text-base">{row.original.sku}</p>,
  },
  {
    accessorKey: 'rating',
    header: ({ header }) => <SortableHeader columnId={header.id} sortKey="rating" label="Оценка" />,
    cell: ({ row }) => <RatingCell rating={row.original.rating} />,
  },
  {
    accessorKey: 'price',
    header: ({ header }) => <SortableHeader columnId={header.id} sortKey="price" label="Цена, ₽" />,
    cell: ({ row }) => <PriceCell price={row.original.price} />,
  },
  {
    accessorKey: 'features',
    header: '',
    cell: () => <ActionsCell />,
  },
]
