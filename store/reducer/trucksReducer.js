const initialState = {
  trucks: [],
  truckDetail: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TRUCKS_LIST":
      return {
        ...state,
        trucks: action.payload,
      };
    case "TRUCK_DETAIL":
      return {
        ...state,
        truckDetail: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
