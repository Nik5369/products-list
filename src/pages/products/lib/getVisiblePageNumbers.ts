export const getVisiblePageNumbers = (currentPage: number, totalPages: number, maxVisiblePages: number): number[] => {
  const halfVisible = Math.floor(maxVisiblePages / 2)

  let startPage = Math.max(1, currentPage - halfVisible)
  let endPage = startPage + maxVisiblePages - 1

  if (endPage > totalPages) {
    endPage = totalPages
    startPage = Math.max(1, endPage - maxVisiblePages + 1)
  }

  const pageCount = endPage - startPage + 1
  return Array.from({ length: pageCount }, (_, index) => startPage + index)
}
