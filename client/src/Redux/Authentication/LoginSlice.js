import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import LoginService from './LoginService'

// get user from localstorage
const user = JSON.parse(localStorage.getItem('user'))
const initialState =  {
    user : user? user : null ,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}
// Login user 
export const login = createAsyncThunk('Authentication/login',async(user,thunkAPI)=>{
    try{
        return await LoginService.login(user)
    }
    catch(error){
        const message =(error.response && error.response.data && error.response.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
export const LoginSlice = createSlice({
    name: 'Authentication',
    initialState,
    reducers: {
      reset: (state) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = false
        state.message = ''
      },
    },
     extraReducers :(builder)=>{
        builder
        .addCase(login.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(login.fulfilled,( state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(login.rejected,(state,action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
     }
})

export const {reset} =LoginSlice.actions
export default LoginSlice.reducer