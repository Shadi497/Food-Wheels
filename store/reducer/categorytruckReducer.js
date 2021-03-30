const initialState = {
  trucks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TRUCK_BY_CATEGORY":
      return {
        ...state,
        trucks: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
