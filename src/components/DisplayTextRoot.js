import DisplayText from "./DisplayText";

const DisplayTextRoot = () => {
  return (
    <div
      style={{
        border: "2px solid red",
        padding: "10px",
      }}
    >
      <h1>DisplayTextRoot</h1>
      <DisplayText></DisplayText>
    </div>
  );
};

export default DisplayTextRoot;
