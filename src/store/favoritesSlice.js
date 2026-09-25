import { createSlice } from '@reduxjs/toolkit';
import React from 'react'

const initialState={
    books:[]
};
export const favoritesSlice=createSlice({
    name:"favorites",
    initialState,
    reducers:{
        addFavorite:(state,action)=>{
            state.books.push(action.payload);
        },
        countFavorites:(state,action)=>{
            state.books.length
        }
    },
    
});

export const {addFavorite}=favoritesSlice.actions;
export default favoritesSlice.reducer;
