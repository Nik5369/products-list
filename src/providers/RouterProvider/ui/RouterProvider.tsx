import type { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthPage, ProductsPage } from '@pages'
import { ROUTE_PATHS } from '../config/routes'
import { PrivateRoute } from './PrivateRoute'

export const RouterProvider: FC = () => {
  return (
    <Routes>
      <Route path={ROUTE_PATHS.login} element={<AuthPage />} />

      <Route element={<PrivateRoute />}>
        <Route path={ROUTE_PATHS.products} element={<ProductsPage />} />
      </Route>

      <Route path={ROUTE_PATHS.root} element={<Navigate to={ROUTE_PATHS.products} replace />} />
      <Route path="*" element={<Navigate to={ROUTE_PATHS.products} replace />} />
    </Routes>
  )
}

