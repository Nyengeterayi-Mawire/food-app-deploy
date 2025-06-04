import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    customer:{},
    orderList : [],
    receipt : {},
    displayReceipt : false,
    successNotification : false,
}; 

export const orderSlice = createSlice({
    name : 'order' ,
    initialState ,
    reducers : {
        setCustomer : (state,action) => {
            state.customer = action.payload;            
        },
        setOrderList : (state,action) => {
            state.orderList = action.payload;            
        },
        setReceipt : (state,action) => {
            state.receipt = action.payload;
        },
        addOrder : (state,action) => {
            state.orderList = [action.payload,...state.orderList];            
        },
        setDisplayReceipt : (state,action) => {
            state.displayReceipt = !state.displayReceipt;
        },
        setSuccessNotification : (state,action) => {
            state.successNotification = !state.successNotification;
        }

    }
});

export const {setCustomer,setOrderList,addOrder,setReceipt,setDisplayReceipt,setSuccessNotification} = orderSlice.actions;

export default orderSlice.reducer;