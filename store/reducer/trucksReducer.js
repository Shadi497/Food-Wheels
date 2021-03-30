const initialState = {
  trucks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TRUCKS_LIST":
      return {
        ...state,
        trucks: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
