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
        }
    }
});

export const {authUser} = userAuthSlice.actions;
export default userAuthSlice.reducer;