import { configureStore, createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
    name:'user',
    initialState:{
        user:null,
    },
    reducers:{
        login: (state,action)=>{
            state.user = action.payload;
        },
        logout:(state)=>{
            state.user=null
        },
    }
})

export const{login,logout}=userslice.actions
export const selectuser = (state)=> state.user;

const store = configureStore({
    reducer: userslice.reducer
});

export default store;