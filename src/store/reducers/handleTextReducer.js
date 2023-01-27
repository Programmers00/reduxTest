const handleTextReducer = (state = { text: "text" }, action) => {
  switch (action.type) {
    case "UPDATE":
      return { ...state, text: action.text };
    default:
      return state;
  }
};
export default handleTextReducer;
