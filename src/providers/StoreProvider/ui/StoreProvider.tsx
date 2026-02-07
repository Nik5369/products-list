import { type FC, type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '../config/store'

interface TStoreProviderProps {
  children: ReactNode
}

export const StoreProvider: FC<TStoreProviderProps> = (props) => {
  const { children } = props

  return <Provider store={store}>{children}</Provider>
}
