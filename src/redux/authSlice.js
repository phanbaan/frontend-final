import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import userApi from "../api/userApi";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { isLoggedIn: true, user,status:false }
  : { isLoggedIn: false, user: null,status:false };
const authSlice = createSlice({
  name:"auth",
  initialState,
  reducers:{
  
  },
  extraReducers:(builder)=>{
    builder.addCase(register.fulfilled,(state,action)=>{
      state.status = true;
      console.log("dispath");
    }).addCase(register.rejected,(state,action)=>{
      state.status = false;
      
    })
    .addCase(login.fulfilled,(state,action)=>{
      state.isLoggedIn = true;
      state.user = action.payload
    }).addCase(login.rejected,(state,action)=>{
      state.isLoggedIn = false
    }).addCase(logout.fulfilled,(state,action)=>{
      state.user = null;
      state.isLoggedIn =false;
    })
  }
})
export const register = createAsyncThunk("auth/register",async (user)=>{
      const res = await userApi.register(user);
      return res
})
export const login = createAsyncThunk("auth/login",async(user)=>{
      const res = await userApi.login(user);
       localStorage.setItem("jwt",JSON.stringify(res.jwt));
       localStorage.setItem("user",JSON.stringify(res.user))
      return res.user
})
export const logout = createAsyncThunk("auth/logout",()=>{
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
})
const {reducer} = authSlice;
export default reducer;