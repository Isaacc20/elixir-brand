import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sendingOrder : false,
    order : null,
    sendingOrderFailed: false
}

const OrderSlice = createSlice({
    name: 'OrderSlice',
    initialState,
    reducers: {
        isSendingOrder: (state) => {
            state.sendingOrder = true,
            state.order = null,
            state.sendingOrderFailed = false
        },
        SentOrder: (state, action) => {
            state.sendingOrder = false,
            state.order = action.payload,
            state.sendingOrderFailed = false
        },
        failedSendingOrder: (state, action) => {
            state.sendingOrder = false,
            state.order = null,
            state.sendingOrderFailed = true
        }
    }
})

export default OrderSlice.reducer
export const {
    isSendingOrder,
    sentOrder,
    failedSendingOrder
} = OrderSlice.actions