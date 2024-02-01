import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isFetchingProducts: false,
    products: null,
    fetchingProductsFailed: false
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        fetchingProducts: (state)=>{
            state.isFetchingProducts = true
            state.products = null
            state.fetchingProductsFailed = false
        },
        fetchingProductsSuccess: (state, action)=>{
            state.isFetchingProducts = false
            state.products = action.payload
            state.fetchingProductsFailed = false
        },
        failedFechingProducts: (state, action)=>{
            state.isFetchingProducts = false
            state.products = null
            state.fetchingProductsFailed = action.payload
        }
    }
})

export default productSlice.reducer
export const { fetchingProducts, fetchingProductsSuccess, failedFechingProducts } = productSlice.actions