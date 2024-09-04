import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "orders",
    initialState: {
        orders: [],
    },
    reducers: {
        addOrder: (state, { payload }) => {
            state.orders.push(payload);
        },
    },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;