const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators

// action types
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCED = "CAKE_RESTOCED"

//action
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

function reStockCake(qty=1){
  return{
    type: CAKE_RESTOCED,
    payload:qty
  }
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
    case CAKE_RESTOCED:
      return{
        ...state,
        numOfCakes: state.numOfCakes + action.payload
      }
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

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())

// store.dispatch(reStockCake(3))

//action creators
const action = bindActionCreators({orderCake, reStockCake}, store.dispatch)
action.orderCake()
action.orderCake()
action.reStockCake(2)

unsubscribe()