import type { TProduct } from '@slices/productsSlice'
import type { ColumnDef } from '@tanstack/react-table'

export const columnsNames: ColumnDef<TProduct>[] = [
  {
    accessorKey: 'name',
    header: 'Наименование',
  },
  {
    accessorKey: 'vendor',
    header: 'Вендор',
  },
  {
    accessorKey: 'articleNumber',
    header: 'Артикул',
  },
  {
    accessorKey: 'rating',
    header: 'Оценка',
  },
  {
    accessorKey: 'price',
    header: 'Цена',
  },
  {
    accessorKey: 'features',
    header: '',
  },
]
