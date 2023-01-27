// useDispatch for sending action to react
import { useSelector, useDispatch } from "react-redux";

const UpdateText = ({ onClick }) => {
  const text = useSelector((state) => state.handleTextReducer.text);
  const dispatch = useDispatch();
  return (
    <div style={{ border: "2px solid red", padding: "10px" }}>
      <h1>UpdateText</h1>
      <input
        type="text"
        onChange={(e) => {
          dispatch({ type: "UPDATE", text: e.target.value });
        }}
        value={text}
      ></input>
    </div>
  );
};

export default UpdateText;
