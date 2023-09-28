import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: { data: [], active: 0 },
  reducers: {
    addData(state, action) {
      state.data = action.payload;
    },
    setActiveData(state, action) {
      state.active = action.payload;
    },
  },
});

export const { addData, setActiveData } = dataSlice.actions;

export default dataSlice;
