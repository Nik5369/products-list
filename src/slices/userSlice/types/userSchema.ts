import type { TUser } from './user'

export interface TUserSchema {
  user: TUser | null
  token: string | null
  isAuth: boolean
  isLoading: boolean
  remember: boolean
}

