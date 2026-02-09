import { type TStoreSchema } from '@providers/StoreProvider'
import { createSelector } from '@reduxjs/toolkit'

const getUserState = (state: TStoreSchema) => state.user

export const getUserData = createSelector(getUserState, (userState) => userState.user)
export const getUserToken = createSelector(getUserState, (userState) => userState.token)
export const getIsAuth = createSelector(getUserState, (userState) => userState.isAuth)
export const getUserIsLoading = createSelector(getUserState, (userState) => userState.isLoading)
export const getUserRemember = createSelector(getUserState, (userState) => userState.remember)

