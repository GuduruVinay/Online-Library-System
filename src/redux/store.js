import { configureStore } from "@reduxjs/toolkit";
import booksReducer from './booksSlice';

const store = configureStore({
    reducer: {
        // 'books' is the name of the state slice
        books: booksReducer,
    }
})

export default store;