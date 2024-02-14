import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gettingOrders : false,
    orders : null,
    gettingOrdersFailed: false
}

const OrderSlice = createSlice({
    name: 'OrderSlice',
    initialState,
    reducers: {
        isfetchingOrders: (state) => {
            state.gettingOrders = true,
            state.orders = null,
            state.gettingOrdersFailed = false
        },
        fetchedOrders: (state, action) => {
            state.gettingOrders = false,
            state.orders = action.payload,
            state.gettingOrdersFailed = false
        },
        failedfetchingOrders: (state, action) => {
            state.gettingOrders = false,
            state.orders = null,
            state.gettingOrdersFailed = action.payload
        }
    }
})

export default OrderSlice.reducer
export const {
    isfetchingOrders,
    fetchedOrders,
    failedfetchingOrders
} = OrderSlice.actions