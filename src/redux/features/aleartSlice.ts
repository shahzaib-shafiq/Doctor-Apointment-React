import { createSlice } from "@reduxjs/toolkit";


export const aleartSlice=createSlice({
    name:"alearts",
    initialState: {
        loading: false,
    },
    reducers:{
        showLoading:(state)=>{
            state.loading=true;
        },
        hideLoading:(state)=>{
            state.loading=false;
        }
    }
})

export  const {showLoading,hideLoading}=aleartSlice.actions;