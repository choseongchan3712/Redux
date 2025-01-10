// Redux의 중앙 상태 관리소로, 모든 상태(state)가 저장되는 곳입니다.
// 여러 개의 Slice를 모아서 한 곳에서 관리합니다.

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// RootState 및 AppDispatch 타입 추론
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;