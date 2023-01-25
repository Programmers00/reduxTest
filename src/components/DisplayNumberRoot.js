import DisplayNumber from "../containers/DisplayNumber";

const DisplayNumberRoot = () => {
  return (
    <div
      style={{
        border: "2px solid blue",
        padding: "10px",
      }}
    >
      <h1>DisplayNumberRoot</h1>
      <DisplayNumber></DisplayNumber>
    </div>
  );
};

export default DisplayNumberRoot;
