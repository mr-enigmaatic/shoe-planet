import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:null,
    isAuthenticated:false,
    token:null
}

const userAuthSlice = createSlice({
    name:'userAuthSlice',
    initialState,
    reducers:{
        authUser:(state, action)=>{
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        userLogout:(state,action)=>{
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        }
    }
});

export const {authUser, userLogout} = userAuthSlice.actions;
export default userAuthSlice.reducer;