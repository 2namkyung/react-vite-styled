import { combineReducers, configureStore } from '@reduxjs/toolkit';

import counterReducer from '@store/features/counter/counterSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
