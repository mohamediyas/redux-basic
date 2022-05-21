const { createStore } = require("redux");
const { produce } = require("immer");

const initialState = {
  name: "imthiyas",
  address: {
    street: "no 12/20 velayudham achari street",
    city: "chennai",
    state: "Tamil nadu",
  },
};

const STREET_UPDATED = "STREET_UPDATED";

const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    //   return {
    //     ...state,
    //     address: {
    //       ...state.address,
    //       street: action.payload,
    //     },
    //   };
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("INitial State", store.getState());

const unSCribe = store.subscribe(() =>
  console.log("update state", store.getState())
);

store.dispatch(updateStreet("Varan street"));

unSCribe();
