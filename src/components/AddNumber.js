import { useState } from "react";
// useDispatch for sending action to react
import { useDispatch } from "react-redux";

const AddNumber = ({ onClick }) => {
  const [size, setSize] = useState(1);
  const dispatch = useDispatch();
  return (
    <div style={{ border: "2px solid blue", padding: "10px" }}>
      <h1>AddNumber</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: "INCREMENT", size: size });
        }}
      ></input>
      <input
        type="number"
        onChange={(e) => {
          setSize(Number(e.target.value));
        }}
        value={size}
      ></input>
    </div>
  );
};

export default AddNumber;
