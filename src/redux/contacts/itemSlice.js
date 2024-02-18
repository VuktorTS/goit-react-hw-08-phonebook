import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from './initialState';

const itemSlice = createSlice({
  name: 'itemContact',
  initialState: INITIAL_STATE.item,
  reducers: {
    setItem: (_, action) => action.payload,
  },
});
export const { setItem } = itemSlice.actions;
export const itemReducer = itemSlice.reducer;
