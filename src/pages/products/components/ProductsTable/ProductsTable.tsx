import { type ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
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
          {row.getVisibleCells().map((cell) => {
            return (
              <TableCell className="py-3 p-x2 text-center" key={cell.id}>
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
            <TableRow key={headerGroup.id} className="[&>*:not(:nth-child(2))]:text-center">
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
