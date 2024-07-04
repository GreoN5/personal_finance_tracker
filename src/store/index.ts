import { combineReducers, configureStore } from "@reduxjs/toolkit";

import transactionsReducer from "./slices/transactionsSlice";

const rootReducer = combineReducers({
  transactions: transactionsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export type AppStore = typeof store
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"];
