/** All redux, react-redux stuff */
import { createStore } from "redux";
import { Provider } from "react-redux";

const handleNumberReducer = (state, action) => {
  if (state === undefined) {
    return { number: 0 };
  }
  if (action.type === "INCREMENT") {
    return { ...state, number: state.number + action.size };
  }
  return state;
};

export default createStore(
  /** reducer */
  (state, action) => {
    // add number
    return handleNumberReducer(state, action);
  }
);
export { Provider };
