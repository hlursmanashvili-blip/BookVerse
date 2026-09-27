import { createSlice } from '@reduxjs/toolkit';

const initialState={
    books:[]
};
export const favoritesSlice=createSlice({
    name:"favorites",
    initialState,
    reducers:{
        addFavorite:(state,action)=>{
               const oldBooks = state.books.find(
        (bookId) => bookId === action.payload,
      );

      if (!oldBooks) {
        state.books.push(action.payload);
      }
    },
            
        
     deleteFavorite: (state, action) => {
  state.books = state.books.filter(
    (bookId) => bookId !== action.payload
  );
}
    
}})

export const {addFavorite, deleteFavorite}=favoritesSlice.actions;
export default favoritesSlice.reducer;
