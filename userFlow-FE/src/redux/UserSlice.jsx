import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    AddToken: (state, action) => {
      state.token = action.payload.token;
    },
    RemoveToken: (state, action) => {
      state.token = "";
    },
  },
});

export const {AddToken,RemoveToken} = userSlice.actions;
export default userSlice.reducer;