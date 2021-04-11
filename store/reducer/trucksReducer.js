const initialState = {
  trucks: [],
  truckDetail: [],
  truckHours: [],
  truckMenu: [],
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
    case "TRUCK_HOURS":
      return {
        ...state,
        truckHours: action.payload,
      };
    case "TRUCK_MENU":
      return {
        ...state,
        truckMenu: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
