import { configureStore } from '@reduxjs/toolkit';
import filmsReducer from './reducers/filmsReducer';
import uiReducer from './reducers/uiReducer';

const store = configureStore({
  reducer: {
    films: filmsReducer,
    ui: uiReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
