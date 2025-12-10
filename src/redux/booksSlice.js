import { createSlice } from "@reduxjs/toolkit";
import { initialBooks } from "../data/books";

const booksSlice = createSlice({
    name: 'books',
    initialState: {
        books: initialBooks,
    },
})

export default booksSlice.reducer;