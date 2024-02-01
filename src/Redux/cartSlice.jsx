import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        add: (state, action) =>{
            state.cart = [...state.cart, action.payload]
        }
    }
})

export default cartSlice.reducer
export const { add } = cartSlice.actions