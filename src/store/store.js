import { createStore } from "redux";
export default createStore((state, action) => {
  if (state === undefined) {
    return { number: 0 };
  }
  if (action.type === "INCREMENT") {
    console.log("##INCREMENT", state, state.number, action.size);
    return { ...state, number: state.number + action.size };
  }
  return state;
});
