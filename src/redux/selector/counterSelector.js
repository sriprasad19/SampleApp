import { createSelector } from '@reduxjs/toolkit';

const selectCount = (state) => state.counter.count;

export const selectedCount = createSelector(selectCount, (item) => item)
