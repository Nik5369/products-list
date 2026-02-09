import type { TUser } from '../types/user'
import { AUTH_TOKEN_KEY, AUTH_USER_KEY } from '../const/authStorageKeys'

export type TAuthData = {
  user: TUser
  token: string
}

export const saveAuthData = (params: TAuthData & { remember: boolean }) => {
  if (typeof window === 'undefined') {
    return
  }

  const { user, token, remember } = params
  const storage = remember ? window.localStorage : window.sessionStorage

  storage.setItem(AUTH_TOKEN_KEY, token)
  storage.setItem(AUTH_USER_KEY, JSON.stringify(user))
}

export const clearAuthData = () => {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.removeItem(AUTH_TOKEN_KEY)
  window.localStorage.removeItem(AUTH_USER_KEY)
  window.sessionStorage.removeItem(AUTH_TOKEN_KEY)
  window.sessionStorage.removeItem(AUTH_USER_KEY)
}

export const loadAuthData = (): TAuthData | null => {
  if (typeof window === 'undefined') {
    return null
  }

  const readFromStorage = (storage: Storage): TAuthData | null => {
    const token = storage.getItem(AUTH_TOKEN_KEY)
    const userRaw = storage.getItem(AUTH_USER_KEY)

    if (!token || !userRaw) {
      return null
    }

    try {
      const user = JSON.parse(userRaw) as TUser
      return { user, token }
    } catch {
      storage.removeItem(AUTH_TOKEN_KEY)
      storage.removeItem(AUTH_USER_KEY)
      return null
    }
  }

  return readFromStorage(window.sessionStorage) ?? readFromStorage(window.localStorage)
}

