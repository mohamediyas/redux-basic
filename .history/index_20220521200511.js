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
        numOfCake: numOfCake - action.payload,
      };
    default:
      return state;
  }
};
