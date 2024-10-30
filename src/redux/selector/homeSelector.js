import { createSelector } from '@reduxjs/toolkit';

const selectUser = (state) => state.home.user;
const selectData = (state) => state.home.data;
const loading = (state) => state.home.loading;

export const selectCurrentUser = createSelector(selectUser, (item) => item)
export const selectDataUser = createSelector(selectData, (item) => item)
export const selectLoading = createSelector(loading, (item) => item)