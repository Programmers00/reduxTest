import AddNumber from "../components/AddNumber";
import { connect } from "react-redux";
const mapReduxDispatchToReactProps = (dispatch) => {
  return {
    onClick: (size) => {
      console.log("##SIZE222", size);
      dispatch({ type: "INCREMENT", size: size });
    },
  };
};
export default connect(null, mapReduxDispatchToReactProps)(AddNumber);

/*
import store from "../store/store";
export default () => {
  return (
    <>
      <AddNumber
        onClick={(size) => {
          store.dispatch({ type: "INCREMENT", size: size });
        }}
      ></AddNumber>
    </>
  );
};
*/
