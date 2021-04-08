import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface uiState {
  currentPage: number,
}

const initialState: uiState = {
  currentPage: 1,
}
export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    togglePage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { togglePage } = uiSlice.actions;

export const selectUi = (state: RootState) => state.ui;

export default uiSlice.reducer;