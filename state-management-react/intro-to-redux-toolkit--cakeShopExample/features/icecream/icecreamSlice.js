const createSlice = require("@reduxjs/toolkit").createSlice

const initialState = {
  numOfIceCream:10
}

const iceCream = createSlice({
  name:"icecream",
  initialState,
  reducers:{
    ordered: (state)=>{
      state.numOfIceCream--
    },
    restocked: (state, action) => {
      state.numOfIceCream += action.payload
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


module.exports = iceCream.reducer
module.exports.iceCreamActions = iceCream.actions