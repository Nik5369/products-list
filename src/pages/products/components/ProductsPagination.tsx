import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { useAppDispatch, useAppSelector } from '@hooks'
import { getCurrentPage, getTotalCount, productsActions } from '@slices/productsSlice'
import { PRODUCTS_LIMIT_ON_PAGE } from '@slices/productsSlice/const/const'
import { VISIBLE_PAGES_COUNT } from '../const/const'
import { getVisiblePageNumbers } from '../lib/getVisiblePageNumbers'

export const ProductsPagination = () => {
  const dispatch = useAppDispatch()
  const currentPageIndex = useAppSelector(getCurrentPage)
  const totalProductsCount = useAppSelector(getTotalCount)

  const totalPages = Math.ceil(totalProductsCount / PRODUCTS_LIMIT_ON_PAGE)
  const currentPageNumber = currentPageIndex + 1

  const isFirstPage = currentPageIndex === 0
  const isLastPage = currentPageIndex === totalPages - 1

  const visiblePageNumbers = getVisiblePageNumbers(currentPageNumber, totalPages, VISIBLE_PAGES_COUNT)

  const navigateToPreviousPage = () => {
    if (!isFirstPage) {
      dispatch(productsActions.setPage(currentPageIndex - 1))
    }
  }

  const navigateToNextPage = () => {
    if (!isLastPage) {
      dispatch(productsActions.setPage(currentPageIndex + 1))
    }
  }

  const navigateToPage = (pageNumber: number) => {
    dispatch(productsActions.setPage(pageNumber - 1))
  }

  return (
    <div className="flex justify-end">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              aria-disabled={isFirstPage}
              className={isFirstPage ? 'pointer-events-none opacity-50' : ''}
              onClick={navigateToPreviousPage}
            />
          </PaginationItem>

          {visiblePageNumbers.map((pageNumber) => (
            <PaginationItem key={pageNumber}>
              <PaginationLink href="#" isActive={pageNumber - 1 === currentPageIndex} onClick={() => navigateToPage(pageNumber)}>
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              href="#"
              aria-disabled={isLastPage}
              className={isLastPage ? 'pointer-events-none opacity-50' : ''}
              onClick={navigateToNextPage}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
