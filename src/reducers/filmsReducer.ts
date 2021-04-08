import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface filmsState {
  items: object[],
  count: number,
}

const initialState: filmsState = {
  items: [],
  count: 0,
}

export const filmsSlice = createSlice({
  name: 'films',
  initialState,    
  reducers: {
    addFilms(state, action: PayloadAction<object[]>) {
      const { payload } = action;
      return {
        items: [...payload],
        count: payload.length,
      }
    },
  },
});

export const { addFilms } = filmsSlice.actions;

export const selectFilms = (state: RootState) => state.films;

export default filmsSlice.reducer;