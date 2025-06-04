import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menuItem:{},
    basket : [],
    displayMenuItem : false,
    displayCartWidget : false, 
    displayBasket : false,
    displayPayment : false,
    displayCustomerWidget : false,
    displaySidebar : false}; 

export const menuSlice = createSlice({
    name : 'menu' ,
    initialState ,
    reducers : {
        setMenuItem : (state,action) => {
            state.menuItem = action.payload;            
        },
        setBasket : (state,action) => {
            state.basket = action.payload;
        },
        addToBasket : (state,action) => {
            state.basket = [action.payload,...state.basket];
        }, 
        setBasketQuantity : (state,action) => { 
            if(action.payload.quantity === 0){
                state.basket[action.payload.index].quantity = action.payload.quantity;
                state.basket.splice(action.payload.index,1);
                
            }else{
                state.basket[action.payload.index].quantity = action.payload.quantity;
            }
            
        },
        setDisplayMenuItem : (state) => {
            state.displayMenuItem = !state.displayMenuItem;          
        },
        setDisplayBasket : (state) => {
            state.displayBasket = !state.displayBasket;          
        },
        setDisplayPayment : (state) => {
            state.displayPayment = !state.displayPayment;          
        },
        setDisplayCustomerWidget : (state) => {
            state.displayCustomerWidget = !state.displayCustomerWidget;          
        },
        setDisplaySidebar : (state) => {
            state.displaySidebar = !state.displaySidebar;          
        },
        
    }
});

export const {setMenuItem,
    setDisplayMenuItem,
    addToBasket,
    setDisplayBasket,
    setDisplayPayment,
    setBasketQuantity,
    setDisplayCustomerWidget,
    setDisplaySidebar,
    setBasket
} = menuSlice.actions;

export default menuSlice.reducer;