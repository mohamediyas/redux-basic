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
