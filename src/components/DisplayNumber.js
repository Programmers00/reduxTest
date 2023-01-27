// useSlector for getting a state from redux
import { useSelector } from "react-redux";

const DisplayNumber = () => {
  // when using a combineReducers, there is
  const number = useSelector((state) => state.handleNumberReducer.number);
  return (
    <div style={{ border: "2px solid blue", padding: "10px" }}>
      <h1>DisplayNumber</h1>
      <input type="number" value={number} readOnly></input>
    </div>
  );
};

export default DisplayNumber;
