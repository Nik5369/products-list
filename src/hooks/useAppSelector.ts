import type { TStoreSchema } from '@providers/StoreProvider'
import { useSelector } from 'react-redux'

export const useAppSelector = useSelector.withTypes<TStoreSchema>()
