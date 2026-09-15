import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { SnackbarState } from './Snackbar.reducer.types';

const initialState: SnackbarState = {
  visible: false,
  type: 'info',
  title: '',
  message: '',
  duration: 4000,
};

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    showSnackbar: (
      state,
      action: PayloadAction<Omit<SnackbarState, 'visible'>>,
    ) => {
      state.visible = true;
      state.type = action.payload.type;
      state.title = action.payload.title;
      state.message = action.payload.message ?? '';
      state.duration = action.payload.duration ?? 4000;
    },
    hideSnackbar: (state) => {
      state.visible = false;
    },
  },
});

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;
export const snackbarReducer = snackbarSlice.reducer;