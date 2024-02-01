import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import BookSlice from "./BookSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
    reducer:{
        productSlice,
        BookSlice,
        cartSlice
    }
})