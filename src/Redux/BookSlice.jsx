import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isFetchingBooks: false,
    books: null,
    fetchingBooksFailed: false
}

const BookSlice = createSlice({
    name: 'Books',
    initialState,
    reducers:{
        fetchingBooks: (state)=>{
            state.isFetchingBooks = true
            state.books = null
            state.fetchingBooksFailed = false
        },
        fetchingBooksSuccess: (state, action)=>{
            state.isFetchingBooks = false
            state.books = action.payload
            state.fetchingBooksFailed = false
        },
        failedFechingBooks: (state, action)=>{
            state.isFetchingBooks = false
            state.books = null
            state.fetchingBooksFailed = action.payload
        }
    }
})

export default BookSlice.reducer
export const { fetchingBooks, fetchingBooksSuccess, failedFechingBooks } = BookSlice.actions