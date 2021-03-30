import { combineReducers } from "redux";
import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import trucksReducer from "./trucksReducer";
import categorytruckReducer from "./categorytruckReducer";

const rootReducer = combineReducers({
  authReducer,
  categoryReducer,
  trucksReducer,
  categorytruckReducer,
});

export default rootReducer;
