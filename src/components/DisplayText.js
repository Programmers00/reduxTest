// useSlector for getting a state from redux
import { useSelector } from "react-redux";

const DisplayText = () => {
  const text = useSelector((state) => state.handleTextReducer.text);
  return (
    <div style={{ border: "2px solid red", padding: "10px" }}>
      <h1>DisplayText</h1>
      <input type="text" value={text} readOnly></input>
    </div>
  );
};

export default DisplayText;
