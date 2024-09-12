import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state, action) => {
            return state + action.payload
        },
        decrement: (state, action) => {
            return state - action.payload;
        },
    }
    }
)

export const {increment, decrement} = counterSlice.actions
export default counterSlice.reducer