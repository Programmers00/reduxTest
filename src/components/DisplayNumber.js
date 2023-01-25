const DisplayNumber = ({ state }) => {
  return (
    <div style={{ border: "2px solid blue", padding: "10px" }}>
      <h1>DisplayNumber</h1>
      <input type="number" value={state} readOnly></input>
    </div>
  );
};

export default DisplayNumber;
