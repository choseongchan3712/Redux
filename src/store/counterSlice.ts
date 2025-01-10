import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

// 초기값 상태
const initialState: CounterState = {
  value: 0,
};

// Slice 생성
const counterSlice = createSlice({
  name: 'counter', //slice 이름
  initialState, // 초기상태
  reducers: { // 상태를 변경하는 함수들
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;  // ✅ reset 액션 추가
    },
  },
});

export const {increment, decrement, reset} = counterSlice.actions;
export default counterSlice.reducer;
