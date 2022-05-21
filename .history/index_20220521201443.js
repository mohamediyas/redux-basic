const redux = require("redux");

const createStore = redux.createStore();

const CAKE_ORDERED = "CAKE_ORDERED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quality: 1,
  };
}

const initialState = {
  numOfCake: 10,
  anotherProperty: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCake: numOfCake - action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("INitial State", store.getState());

store.subscribe(() => console.log("update state", store.getState()));

store.dispatch(orderCake());
