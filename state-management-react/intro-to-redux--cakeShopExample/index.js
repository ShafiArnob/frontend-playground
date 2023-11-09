const redux = require("redux");
const createStore = redux.createStore;

const CAKE_ORDERED = "CAKE_ORDERED";

//action
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

const initialState = {
  numOfCakes: 10,
};

// readucers
//(prevState, action) => newState
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

//store
const store = createStore(reducer);
console.log("Initial State: ", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Update State: ", store.getState())
);

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscribe()