import React from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
} from '@tanstack/react-table'
import DebouncedInput from './DebouncedInput'
import {
  rankItem,
} from '@tanstack/match-sorter-utils'


const fuzzyFilter =   (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value)

  // Store the itemRank info
  addMeta({
    itemRank,
  })

  // Return if the item should be filtered in/out
  return itemRank.passed
}
  
export default function Table({
  data,
  columns,
}){
  const [globalFilter, setGlobalFilter] = React.useState('')
  const [columnResizeMode, setColumnResizeMode] =
    React.useState('onChange')

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    defaultColumn: {
      minSize: 0,
      size: 0,
    },
    state: {
      globalFilter,
    },
    enableColumnResizing: true,
    columnResizeMode: 'onChange',
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  })

  return (
    <div className="bg-white p-4 ">
        <DebouncedInput
          value={globalFilter ?? ''}
          onChange={value => setGlobalFilter((value))}
          className="w-full mx-4 mb-4 border border-gray-300 bg-gray-50 rounded-lg px-4 py-2 mt-2 focus:outline-none focus:border-green-500"
          placeholder="Rechercher"
        />
      <table className='w-full relative z-0 table-fixed divide-y divide-gray-200 mx-4'>
        <thead className='text-gray-700 uppercase bg-gray-50 '>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <th 
                  key={header.id}
                  colSpan={header.colSpan}
                  style={{ position: 'relative', width: header.getSize() }}
                  className="px-6 py-2 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                     {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    {header.column.getCanResize() && (
                      <div
                        onMouseDown={header.getResizeHandler()}
                        onTouchStart={header.getResizeHandler()}
                        className={`resizer ${
                          header.column.getIsResizing() ? 'isResizing' : ''
                        }`}
                      ></div>
                    )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {table.getRowModel().rows.map(row => {
            return (
              <tr key={row.id} className="relative hover:bg-gray-50 hover:shadow hover:border-b-0">
                {row.getVisibleCells().map(cell => {
                  return (
                    <td key={cell.id} style={{ width: cell.column.getSize() }}
                     className=" px-6 py-3 truncate whitespace-nowrap z-0">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="flex items-center justify-end gap-2 bg-white px-4 py-3  border-t border-gray-200 sm:px-6 mt-2 pt-5">
        <button
          className="p-1 px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          className="p-1 px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>
        <button
          className="p-1 px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          className="p-1 px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} sur{' '}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Aller à la page:{' '}
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              table.setPageIndex(page)
            }}
            className="border rounded w-16"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={e => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[2, 5, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Voir {pageSize}
            </option>
          ))}
        </select>
      </div>
     
    </div>
  )
}