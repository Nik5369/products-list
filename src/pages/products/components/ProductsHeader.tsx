import type { FC } from 'react'
import { SearchInput } from './SearchInput'

type TProps = {}

export const ProductsHeader: FC<TProps> = (props) => {
  const {} = props

  return (
    <div className="py-6 px-7.5 bg-background mt-5 flex justify-center rounded-xl mb-8">
      <h1 className="text-2xl font-bold absolute left-7.5">Товары</h1>
      <div className="shrink-0 w-[54%] ">
        <SearchInput />
      </div>
    </div>
  )
}
