import { InputGroup, InputGroupAddon, InputGroupInput } from '@components/ui'
import { useAppDispatch, useAppSelector } from '@hooks'
import { getSearchText, productsActions } from '@slices/productsSlice'
import { SearchIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

export const SearchInput = () => {
  const dispatch = useAppDispatch()
  const searchText = useAppSelector(getSearchText)
  const [localValue, setLocalValue] = useState(searchText)

  useEffect(() => {
    setLocalValue(searchText)
  }, [searchText])

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(productsActions.setSearchText(localValue))
    }, 500)

    return () => clearTimeout(timer)
  }, [localValue, dispatch])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value)
  }

  return (
    <InputGroup className="border-none py-5 px-1 bg-search-input hover:bg-search-input/50">
      <InputGroupInput id="inline-start-input" placeholder="Найти" onChange={handleChange} value={localValue} />
      <InputGroupAddon align="inline-start">
        <SearchIcon className="text-muted-foreground" width={24} height={24} />
      </InputGroupAddon>
    </InputGroup>
  )
}
