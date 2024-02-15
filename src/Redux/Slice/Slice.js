import  {createSlice} from '@reduxjs/toolkit';

 
const username = localStorage.getItem("username")

let initialState = {

  state: {
      isFetching: false,
  },
  user:{
username:username,
isAuthenticated: false
}
}
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsFetching : (state) => {
        state.state.isFetching = true;
  }, 
  }  
});

export const {
      setIsFetching,
    } = userSlice.actions;


export default userSlice.reducer;