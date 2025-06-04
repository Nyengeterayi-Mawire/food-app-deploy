import { configureStore} from '@reduxjs/toolkit';
import useReducer from './features/user'; 
import menuReducer from './features/menu';
import orderReducer from './features/order';

export const store = configureStore({
    reducer : {
        user : useReducer,
        menu : menuReducer,
        order : orderReducer
    }
});