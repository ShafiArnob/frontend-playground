const createSlice = require("@reduxjs/toolkit").createSlice

const initialState = {
  numOfCakes:10
}

const cakeSlice = createSlice({
  name:"cake",
  initialState,
  reducers:{
    ordered: (state)=>{
      state.numOfCakes--
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload
    }
  }
})

/*
  The slice taks care of
  - Defining a action type constent
  - Action object and action cretor
  - switch statements in the reducer
  - handling immuteable update in the reducer
*/


module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions