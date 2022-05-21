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
