import { useState } from "react";
const AddNumber = ({ onClick }) => {
  const [size, setSize] = useState(1);
  return (
    <div style={{ border: "2px solid blue", padding: "10px" }}>
      <h1>AddNumber</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          console.log("##size", size);
          onClick(size);
        }}
      ></input>
      <input
        type="number"
        onChange={(e) => {
          console.log("#e", e.target.value);
          setSize(Number(e.target.value));
        }}
        value={size}
      ></input>
    </div>
  );
};

export default AddNumber;
