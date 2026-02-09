import { loginRequest } from '@api'
import { createAsyncThunk } from '@reduxjs/toolkit'
import type { AxiosError } from 'axios'
import type { TUser } from '../types/user'

type TLoginArgs = {
  login: string
  password: string
  remember: boolean
}

type TLoginResponse = {
  user: TUser
  token: string
  remember: boolean
}

type TLoginErrorResponse = {
  message?: string
}

export const loginThunk = createAsyncThunk<TLoginResponse, TLoginArgs, { rejectValue: string }>(
  'user/login',
  async ({ login, password, remember }, { rejectWithValue }) => {
    try {
      const user = await loginRequest({
        username: login,
        password,
        expiresInMins: 30,
      })

      return {
        user,
        token: user.token,
        remember,
      }
    } catch (error) {
      const err = error as AxiosError<TLoginErrorResponse>
      const message = err.response?.data?.message ?? 'Ошибка авторизации'
      return rejectWithValue(message)
    }
  },
)
