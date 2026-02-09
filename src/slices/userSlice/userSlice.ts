import { createSlice } from '@reduxjs/toolkit'
import { loginThunk } from './asyncThunks/loginThunk'
import type { TUserSchema } from './types/userSchema'
import { clearAuthData, loadAuthData, saveAuthData } from './lib/authStorage'

const initialState: TUserSchema = {
  user: null,
  token: null,
  isAuth: false,
  isLoading: false,
  remember: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      state.user = null
      state.token = null
      state.isAuth = false
      state.remember = false
      clearAuthData()
    },
    setAuthFromStorage(state) {
      const data = loadAuthData()

      if (!data) {
        return
      }

      state.user = data.user
      state.token = data.token
      state.isAuth = true
      state.remember = true
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
      state.user = payload.user
      state.token = payload.token
      state.isAuth = true
      state.isLoading = false
      state.remember = payload.remember

      saveAuthData({
        user: payload.user,
        token: payload.token,
        remember: payload.remember,
      })
    })

    builder.addCase(loginThunk.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice

export { clearAuthData, loadAuthData }

