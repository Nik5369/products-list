import { type ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { cn } from '@lib'
import { TableSkeleton } from './TableSkeleton'

type TProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  loadingData: boolean
}
export const ProductsTable = <TData, TValue>(props: TProps<TData, TValue>) => {
  const { columns, data, loadingData } = props

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  const renderTableContent = () => {
    if (table.getRowModel().rows?.length) {
      return table.getRowModel().rows.map((row) => (
        <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'} className="relative">
          {row.getVisibleCells().map((cell, columnIndex) => {
            const isCheckboxColumn = columnIndex === 0
            const isTitleColumn = columnIndex === 1

            return (
              <TableCell
                key={cell.id}
                className={cn(
                  'py-3 px-2 text-center',
                  !isTitleColumn && 'whitespace-nowrap',
                  isTitleColumn && 'whitespace-normal break-words max-w-[320px] text-left',
                  isCheckboxColumn && 'w-[48px] px-2 text-left',
                )}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            )
          })}
        </TableRow>
      ))
    } else if (loadingData) {
      return <TableSkeleton />
    }
    return (
      <TableRow>
        <TableCell colSpan={columns.length} className="h-24 text-center">
          Ничего не нашлось...
        </TableCell>
      </TableRow>
    )
  }

  return (
    <div className="overflow-hidden rounded-md ">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
              className="[&>*:not(:nth-child(2))]:text-center [&>*:first-child]:w-[48px] [&>*:first-child]:px-2"
            >
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="py-6 ">
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>{renderTableContent()}</TableBody>
      </Table>
    </div>
  )
}
