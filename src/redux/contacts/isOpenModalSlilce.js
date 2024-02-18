import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from './initialState';

const isOpenModalSlice = createSlice({
  name: 'isOpenModal',
  initialState: INITIAL_STATE.isOpenModal,
  reducers: {
    setIsOpenModal: (_, action) => action.payload,
  },
});

export const { setIsOpenModal } = isOpenModalSlice.actions;
export const isOpenModalReducer = isOpenModalSlice.reducer;
