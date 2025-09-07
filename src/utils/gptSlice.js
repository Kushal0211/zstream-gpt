import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : 'gpt',
    initialState : {
        currentState : false,
        movieResults : null,
        movieNames : null,
    },
    reducers : {
        toggleSearchView (state,action) {
            state.currentState = !state.currentState
        },

        addGptMoviesToTheStore (state, action) {
            const { movieNames , movieResults} = action.payload;
            state.movieResults = movieResults;
            state.movieNames = movieNames;
        }
    }
})

export  const {toggleSearchView, addGptMoviesToTheStore} = gptSlice.actions;
export default gptSlice.reducer;