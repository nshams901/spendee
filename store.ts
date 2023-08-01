import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./src/services/reducers/expenseReducer";

export const store = configureStore({
    reducer: {
        expenseReducer
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch