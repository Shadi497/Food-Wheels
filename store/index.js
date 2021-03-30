import thunk from "redux-thunk";
import rootReducer from "./reducer";
import { createStore, applyMiddleware } from "redux";
import { checkToken } from "./actions/authActions";
import { getCategory } from "./actions/categoryActions";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(checkToken());
store.dispatch(getCategory());

export default store;
