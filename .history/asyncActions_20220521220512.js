const { applyMiddleware, createStore } = require("redux");
const thunk = require("redux-thunk");
const axios = require("axios").default;

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USER_REQUESTED = "FETCH_USER_REQUESTED";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_ERROR = "FETCH_USER_ERROR";

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUESTED,
  };
};

const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

const fetchUserFail = (error) => {
  return {
    type: FETCH_USER_ERROR,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USER_ERROR:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

const fetchUser = () => {
  return async (dispatch) => {
    dispatch(fetchUserRequest());

    try {
      const response = await axios.get(
        "http://jsonplaceholder.typicode.com/users"
      );

      const users = response.data.map((user) => user.id);

      dispatch(fetchUserSuccess(users));
    } catch (error) {
      dispatch(fetchUserFail(error.message));
    }
  };
};

const store = createStore(reducer, applyMiddleware(thunk()));

store.subscribe(() => console.log(store.getState()));

store.dispatch(fetchUser());
