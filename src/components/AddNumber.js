import { useState } from "react";
const AddNumber = ({ onClick }) => {
  const [size, setSize] = useState(3);
  return (
    <div style={{ border: "2px solid blue", padding: "10px" }}>
      <h1>AddNumber</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          onClick(size);
        }}
      ></input>
      <input
        type="number"
        onChange={(e) => {
          setSize(Number(e.target.value));
        }}
      >
        {}
      </input>
    </div>
  );
};

export default AddNumber;
