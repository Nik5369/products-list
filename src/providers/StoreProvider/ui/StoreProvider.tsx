import { type FC, type ReactNode, useEffect } from 'react'
import { Provider } from 'react-redux'
import { userActions } from '@slices/userSlice'
import { store } from '../config/store'

interface TStoreProviderProps {
  children: ReactNode
}

export const StoreProvider: FC<TStoreProviderProps> = (props) => {
  const { children } = props

  useEffect(() => {
    store.dispatch(userActions.setAuthFromStorage())
  }, [])

  return <Provider store={store}>{children}</Provider>
}
