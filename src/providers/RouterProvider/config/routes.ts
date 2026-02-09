export const ROUTE_PATHS = {
  root: '/',
  login: '/login',
  products: '/products',
} as const

export type TRouteKey = keyof typeof ROUTE_PATHS
export type TRoutePath = (typeof ROUTE_PATHS)[TRouteKey]

