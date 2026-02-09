import { api } from '@lib'
import type { TUser } from '@slices/userSlice'
import type { AxiosResponse } from 'axios'

type TLoginRequest = {
  username: string
  password: string
  expiresInMins?: number
}

export const loginRequest = async (data: TLoginRequest) => {
  const response: AxiosResponse<TUser> = await api.post('/auth/login', data)
  return response.data
}
