import { configureStore } from "@reduxjs/toolkit";
import bookListReducer from "./slices/BookList";

const reducer = {
    bookList: bookListReducer,
};

const store = configureStore({ reducer });
export default store;