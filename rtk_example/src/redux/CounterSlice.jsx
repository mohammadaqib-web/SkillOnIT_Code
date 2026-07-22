import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    Increment: (state, action) => {
      state.value += action.payload;
    },
    Decrement: (state, action) => {
      state.value -= 1;
    },
    Reset: (state, action) => {
      state.value = 0;
    },
  },
});

export const {Increment, Decrement, Reset} = CounterSlice.actions;
export default CounterSlice.reducer;