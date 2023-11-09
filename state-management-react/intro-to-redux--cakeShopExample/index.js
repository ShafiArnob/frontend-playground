const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const reduxLogger = require("redux-logger")
const logger = reduxLogger.createLogger()

// action types
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCED = "CAKE_RESTOCED";

const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCED = "ICECREAM_RESTOCED";

//action
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

function reStockCake(qty = 1) {
  return {
    type: CAKE_RESTOCED,
    payload: qty,
  };
}

function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

function reStockIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCED,
    payload: qty,
  };
}

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20,
// };

const initialCakeState={
  numOfCakes:10
}

const initialIceCreamState={
  numOfIceCreams:20
}

// readucers
//(prevState, action) => newState
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload,
      };
    case ICECREAM_RESTOCED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

// combine reducers
const rootReducer = combineReducers({
  cake:cakeReducer,
  iceCream: iceCreamReducer
})

//store
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial State:", store.getState());

const unsubscribe = store.subscribe(() =>{});

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())

// store.dispatch(reStockCake(3))

//action creators
const action = bindActionCreators(
  { orderCake, reStockCake, orderIceCream, reStockIceCream },
  store.dispatch
);
action.orderCake();
action.orderCake();

action.orderIceCream()
action.orderIceCream()

action.reStockCake(2);
action.reStockIceCream(3)

unsubscribe();
