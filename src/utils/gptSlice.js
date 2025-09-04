import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : 'gpt',
    initialState : {
        currentState : false,
    },
    reducers : {
        toggleSearchView (state,action) {
            state.currentState = !state.currentState
        }
    }
})

export  const {toggleSearchView} = gptSlice.actions;
export default gptSlice.reducer;