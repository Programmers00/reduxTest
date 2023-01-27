const handleNumberReducer = (state = { number: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, number: state.number + action.size };
    default:
      return state;
  }
};
export default handleNumberReducer;
