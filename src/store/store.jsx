import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slice/UsersData";
const store = configureStore({
    reducer: {
        data: dataSlice.reducer,
    },
})
export default store