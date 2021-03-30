const initialState = {
  category: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
