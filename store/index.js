import thunk from "redux-thunk";
import rootReducer from "./reducer";
import { createStore, applyMiddleware } from "redux";
import { checkToken } from "./actions/authActions";
import { getCategory } from "./actions/categoryActions";
import { trucksList } from "./actions/trucksActions";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(checkToken());
store.dispatch(getCategory());
store.dispatch(trucksList());

export default store;
