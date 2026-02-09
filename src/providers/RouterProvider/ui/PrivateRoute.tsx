import { useAppSelector } from '@hooks'
import type { FC, ReactElement } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { getIsAuth } from '@slices/userSlice'
import { ROUTE_PATHS } from '../config/routes'

type TPrivateRouteProps = {
  children?: ReactElement
}

export const PrivateRoute: FC<TPrivateRouteProps> = (props) => {
  const { children } = props

  const isAuth = useAppSelector(getIsAuth)

  if (!isAuth) {
    return <Navigate to={ROUTE_PATHS.login} replace />
  }

  if (children) {
    return children
  }

  return <Outlet />
}

