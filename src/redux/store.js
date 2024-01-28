import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import userAuthSlice from "./slices/userAuthSlice";



const store = configureStore({
    reducer:{
        products: productSlice,
        authUser: userAuthSlice,
    }
});

export default store;