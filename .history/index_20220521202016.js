const { createStore } = require("redux");

const CAKE_ORDERED = "CAKE_ORDERED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quality: 1,
  };
}

const initialState = {
  numOfCake: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCake: numOfCake - action.quality,
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

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unSCribe();
