/** All redux, react-redux stuff */
import { createStore, combineReducers } from "redux";
import { handleTextReducer, handleNumberReducer } from "./reducers";

const rootReducer = combineReducers({
  handleTextReducer,
  handleNumberReducer,
});

export default createStore(rootReducer);
