import { createSlice } from "@reduxjs/toolkit";
import { initialBooks } from "../data/books";

const booksSlice = createSlice({
    name: 'books',
    initialState: {
        books: initialBooks,
    },
    reducers: {
        // Redux state management for books
        addBook: (state, action) => {
            // Add the new book to the start of the array
            state.books.unshift(action.payload);
        }
    }
})

// Export the action creator for use in the AddBookPage
export const { addBook } = booksSlice.actions;

// Export the reducer for configuration in the store
export default booksSlice.reducer;