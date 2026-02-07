import { InputGroup, InputGroupAddon, InputGroupInput } from '@components/ui'
import { SearchIcon } from 'lucide-react'

interface SearchInputProps {}

export const SearchInput = ({}: SearchInputProps) => {
  return (
    <InputGroup className="border-none py-5 px-1 bg-search-input hover:bg-search-input/50">
      <InputGroupInput id="inline-start-input" placeholder="Найти" />
      <InputGroupAddon align="inline-start">
        <SearchIcon className="text-muted-foreground" width={24} height={24} />
      </InputGroupAddon>
    </InputGroup>
  )
}
