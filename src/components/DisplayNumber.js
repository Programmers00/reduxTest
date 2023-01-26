// useSlector for getting a state from redux
import { useSelector } from "react-redux";

const DisplayNumber = () => {
  const number = useSelector((state) => state.number);
  return (
    <div style={{ border: "2px solid blue", padding: "10px" }}>
      <h1>DisplayNumber</h1>
      <input type="number" value={number} readOnly></input>
    </div>
  );
};

export default DisplayNumber;
