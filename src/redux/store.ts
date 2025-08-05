import { configureStore } from "@reduxjs/toolkit";
import { aleartSlice } from "./features/aleartSlice";


export default configureStore({
    reducer: {
        alearts: aleartSlice.reducer,
    }
});