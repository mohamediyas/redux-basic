const {
  applyMiddleware,
  combineReducers,
  createStore,
  bindActionCreators,
} = require("redux");
const { createLogger } = require("redux-logger");

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOKE = "CAKE_RESTOKE";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOKE = "ICECREAM_RESTOKE";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quality: 1,
  };
}

function restokeCake(qty = 1) {
  return {
    type: CAKE_RESTOKE,
    quality: qty,
  };
}

function restokeIce(qty = 1) {
  return {
    type: ICECREAM_RESTOKE,
    quality: qty,
  };
}

function orderIce(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    quality: qty,
  };
}

const initialState = {
  numOfCake: 10,
  numOfIceCream: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCake: state.numOfCake - action.quality,
      };
    case CAKE_RESTOKE:
      return {
        ...state,
        numOfCake: state.numOfCake + action.quality,
      };
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - action.quality,
      };
    case ICECREAM_RESTOKE:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream + action.quality,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("INitial State", store.getState());

const unSCribe = store.subscribe(() =>
  console.log("update state", store.getState())
);

const actions = bindActionCreators(
  { orderCake, restokeCake, orderIce, restokeIce },
  store.dispatch
);

/*
const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})

const store = createStore(rootReducer)

*/

actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restokeCake(3);

actions.orderIce(1);
actions.orderIce(1);
actions.orderIce(1);

actions.restokeIce(4);

unSCribe();
