import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:{},
    token:'',
    url : 'http://localhost:3001'}; 

export const userSlice = createSlice({
    name : 'user' ,
    initialState ,
    reducers : {
        setUser : (state,action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        }, 
        setFavorite : (state,action) => {
            console.log(action.payload)
            const exist = state.user.favorites.includes(action.payload)
            if(exist){
                state.user.favorites = state.user.favorites.filter(menuID=>menuID !== action.payload);
            }else{
                state.user.favorites = [action.payload,...state.user.favorites]
            }            
        }
        
    }
});

export const {setUser,setFavorite} = userSlice.actions;

export default userSlice.reducer;